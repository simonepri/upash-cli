#!/usr/bin/env node
/* eslint-disable promise/prefer-await-to-then */
'use strict';

const meow = require('meow');
const logSymbols = require('log-symbols');
const updateNotifier = require('update-notifier');

const upash = require('@upash/universal');
upash.install('argon2', require('@upash/argon2'));
upash.install('scrypt', require('@upash/scrypt'));
upash.install('bcrypt', require('@upash/bcrypt'));
upash.install('pbkdf2', require('@upash/pbkdf2'));

const cli = meow(
  `
  Usage
    $ upash hash <algorithm name> <password string>
    $ upash verify <algorithm name> <hash string> <password string>

  Algorithms available
    argon2
    scrypt
    bcrypt
    pbkdf2

  Options for argon2 hashing
    --type <number>            0, 1 or 2 for Argon2d, Argon2i and Argon2id
                               respectively.
    --timeCost <number>        The number of iterations.
    --memoryCost <number>      The memory usage as 2^memoryCost.
    --parallelism <number>     The number of parallel threads.
    --hashLength <number>      The length of the generated hash.

  Options for scrypt hashing
    --maxtime <number>         The maximum amount of time in seconds spent to
                               compute the derived key.
    --maxmem <number>          The maximum number of bytes of RAM used when
                               computing the derived encryption key.
    --maxmemfrac <number>      The fraction of the available RAM used when
                               computing the derived key.

   Options for bcrypt hashing
     --rounds <number>         The number of iterations as 2^rounds.

   Options for pbkdf2 hashing
     --iterations <number>     The number of iterations to compute the derived
                               key.
     --keylen <number>         The length of the computed derived key.
     --digest <string>         A digest function from the crypto.getHashes()
                               list of supported digest functions.

  Examples
    $ upash hash argon2 "Hello World"
    $ upash verify pbkdf2 "hash string" "Hello World"
    $ upash hash bcrypt "Hello World" --rounds=10
`,
  {
    flags: {
      // Options for argon2
      type: {type: 'number'},
      timeCost: {type: 'number'},
      memoryCost: {type: 'number'},
      parallelism: {type: 'number'},
      hashLength: {type: 'number'},

      // Options for scrypt
      maxtime: {type: 'number'},
      maxmem: {type: 'number'},
      maxmemfrac: {type: 'number'},

      // Options for bcrypt
      rounds: {type: 'number'},

      // Options for pbkdf2
      iterations: {type: 'number'},
      keylen: {type: 'number'},
      digest: {type: 'string'},
    },
  }
);

Promise.resolve()
  .then(() => {
    updateNotifier({pkg: cli.pkg}).notify();
  })
  .then(() => {
    if (cli.input.length === 0) {
      cli.showHelp(0);
    }
    switch (cli.input[0]) {
      case 'hash': {
        if (cli.input.length !== 3) {
          return Promise.reject(
            new TypeError(
              'Syntax: `upash hash <algorithm name> <password string>`'
            )
          );
        }
        return upash.use(cli.input[1]).hash(cli.input[2], cli.flags);
      }
      case 'verify': {
        if (cli.input.length !== 4) {
          return Promise.reject(
            new TypeError(
              'Syntax: `upash verify <algorithm name> <hash string> <password string>`'
            )
          );
        }
        return upash.use(cli.input[1]).verify(cli.input[2], cli.input[3]);
      }
      default: {
        cli.showHelp(0);
      }
    }
  })
  .then(console.log)
  .catch(err => {
    console.error(`\n${logSymbols.error} ${err.message}`);
    process.exit(1);
  });
