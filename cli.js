#!/usr/bin/env node
/* eslint-disable promise/prefer-await-to-then */
'use strict';

const meow = require('meow');
const logSymbols = require('log-symbols');
const updateNotifier = require('update-notifier');

const upash = require('upash');
upash.install('argon2', require('@phc/argon2'));
upash.install('scrypt', require('@phc/scrypt'));
upash.install('bcrypt', require('@phc/bcrypt'));
upash.install('pbkdf2', require('@phc/pbkdf2'));

const cli = meow(
  `
  Usage
    $ upash hash <algorithm name> <password string>
    $ upash verify [<algorithm name>] <hash string> <password string>

  Algorithms available
    argon2
    scrypt
    bcrypt
    pbkdf2

  Options for argon2 hashing
    --variant <number>         Variant of argon2 to use.
                               Can be one of ['d', 'i', 'id'] for
                               argon2d, argon2i and argon2id respectively.
    --iterations <number>      Number of iterations to use
    --memory <number>          Amount of memory to use in kibibytes.
    --parallelism <number>     Degree of parallelism to use.

  Options for scrypt hashing
    --blocksize <number>       Amount of memory to use in kibibytes.
    --cost <number>            CPU/memory cost parameter.
    --parallelism <number>     Degree of parallelism to use.

   Options for bcrypt hashing
     --rounds <number>         Number of iterations to use as as 2^rounds.

   Options for pbkdf2 hashing
     --iterations <number>     Number of iterations to use.
     --digest <string>         Name of digest to use when applying the key
                               derivation function.
                               Can be one of ['sha1', 'sha256', 'sha512'].

  Examples
    $ upash hash argon2 "Hello World"
    $ upash verify pbkdf2 "hash string" "Hello World"
    $ upash hash bcrypt "Hello World" --rounds=10
`,
  {
    flags: {
      // Options for argon2
      variant: {type: 'number'},
      iterations: {type: 'number'},
      memory: {type: 'number'},
      parallelism: {type: 'number'},

      // Options for scrypt
      blocksize: {type: 'number'},
      cost: {type: 'number'},
      /* parallelism: {type: 'number'}, */

      // Options for bcrypt
      rounds: {type: 'number'},

      // Options for pbkdf2
      /* iterations: {type: 'number'}, */
      digest: {type: 'string'}
    }
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
        if (cli.input.length !== 3 && cli.input.length !== 4) {
          return Promise.reject(
            new TypeError(
              'Syntax: `upash verify [<algorithm name>] <hash string> <password string>`'
            )
          );
        }
        if (cli.input.length === 4) {
          return upash.use(cli.input[1]).verify(cli.input[2], cli.input[3]);
        }
        return upash.verify(cli.input[1], cli.input[2]);
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
