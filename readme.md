<h1 align="center">
  <img src="https://github.com/simonepri/upash-cli/raw/master/media/preview.gif" alt="upash cli">
  <b>@upash/cli</b>
</h1>
<p align="center">
  <!-- CI - TravisCI -->
  <a href="https://travis-ci.org/simonepri/upash-cli">
    <img src="https://img.shields.io/travis/simonepri/upash-cli/master.svg?label=MacOS%20%26%20Linux" alt="Mac/Linux Build Status" />
  </a>
  <!-- CI - AppVeyor -->
  <a href="https://ci.appveyor.com/project/simonepri/upash-cli">
    <img src="https://img.shields.io/appveyor/ci/simonepri/upash-cli/master.svg?label=Windows" alt="Windows Build status" />
  </a>
  <!-- Coverage - Codecov -->
  <a href="https://codecov.io/gh/simonepri/upash-cli">
    <img src="https://img.shields.io/codecov/c/github/simonepri/upash-cli/master.svg" alt="Codecov Coverage report" />
  </a>
  <!-- DM - Snyk -->
  <a href="https://snyk.io/test/github/simonepri/upash-cli?targetFile=package.json">
    <img src="https://snyk.io/test/github/simonepri/upash-cli/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" />
  </a>
  <!-- DM - David -->
  <a href="https://david-dm.org/simonepri/upash-cli">
    <img src="https://david-dm.org/simonepri/upash-cli/status.svg" alt="Dependency Status" />
  </a>

  <br/>

  <!-- Code Style - XO-Prettier -->
  <a href="https://github.com/xojs/xo">
    <img src="https://img.shields.io/badge/code_style-XO+Prettier-5ed9c7.svg" alt="XO Code Style used" />
  </a>
  <!-- Test Runner - AVA -->
  <a href="https://github.com/avajs/ava">
    <img src="https://img.shields.io/badge/test_runner-AVA-fb3170.svg" alt="AVA Test Runner used" />
  </a>
  <!-- Test Coverage - Istanbul -->
  <a href="https://github.com/istanbuljs/nyc">
    <img src="https://img.shields.io/badge/test_coverage-NYC-fec606.svg" alt="Istanbul Test Coverage used" />
  </a>
  <!-- Init - ni -->
  <a href="https://github.com/simonepri/ni">
    <img src="https://img.shields.io/badge/initialized_with-ni-e74c3c.svg" alt="NI Scaffolding System used" />
  </a>
  <!-- Release - np -->
  <a href="https://github.com/sindresorhus/np">
    <img src="https://img.shields.io/badge/released_with-np-6c8784.svg" alt="NP Release System used" />
  </a>

  <br/>

  <!-- Version - npm -->
  <a href="https://www.npmjs.com/package/@upash/cli">
    <img src="https://img.shields.io/npm/v/@upash/cli.svg" alt="Latest version on npm" />
  </a>
  <!-- License - MIT -->
  <a href="https://github.com/simonepri/upash-cli/tree/master/license">
    <img src="https://img.shields.io/github/license/simonepri/upash-cli.svg" alt="Project license" />
  </a>
</p>
<p align="center">
  🔒 Easy to use CLI for all password hashing algorithms

  <br/>

  <sub>
    Coded with ❤️ by <a href="#authors">Simone Primarosa</a>.
  </sub>
</p>

## Synopsis
This package is part of the [upash][home] project,
which aim is to provide a unified and user-friendly APIs for all the passwords
hashing algorithms out there.  

In particular, this package allows you to use multiple password hashing
algorithms through a simple CLI.

Do you believe that this is *useful*?
It has *saved you time*?
Or maybe you simply *like it*?  
If so, [show your appreciation with a Star ⭐️][start].

## Install
```bash
npm install -g @upash/cli
```

## Help
```bash
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
```

## Related
- [@upash/universal][universal] -
🔒 Easy to use Unified API for all password hashing algorithms.
- [@upash/argon2][argon2] -
🔒 Easy to use Unified API for Argon2 password hashing algorithm.
- [@upash/scrypt][scrypt] -
🔒 Easy to use Unified API for scrypt password hashing algorithm.
- [@upash/bcrypt][bcrypt] -
🔒 Easy to use Unified API for bcrypt password hashing algorithm.
- [@upash/pbkdf2][pbkdf2] -
🔒 Easy to use Unified API for pbkdf2-crypt password hashing algorithm.

## Contributing
Contributions are REALLY welcome and if you find a security flaw in this code,
PLEASE [report it][new issue].  
Please check the [contributing guidelines][contributing] for more details.  
Thanks!

## Authors
- **Simone Primarosa** - *Follow* me on
*Github* ([:octocat:@simonepri][github:simonepri]) and on
*Twitter* ([🐦@simonepri][twitter:simonepri])

See also the list of [contributors][contributors] who participated in this project.

## License
This project is licensed under the MIT License - see the [license][license] file for details.

<!-- Links -->
[home]: https://github.com/simonepri/upash

[start]: https://github.com/simonepri/upash-cli#start-of-content
[new issue]: https://github.com/simonepri/upash-cli/issues/new
[contributors]: https://github.com/simonepri/upash-cli/contributors

[license]: https://github.com/simonepri/upash-cli/tree/master/license
[contributing]: https://github.com/simonepri/upash-cli/tree/master/.github/contributing.md

[universal]: https://github.com/simonepri/upash-universal
[argon2]: https://github.com/simonepri/upash-argon2
[scrypt]: https://github.com/simonepri/upash-scrypt
[bcrypt]: https://github.com/simonepri/upash-bcrypt
[pbkdf2]: https://github.com/simonepri/upash-pbkdf2

[github:simonepri]: https://github.com/simonepri
[twitter:simonepri]: http://twitter.com/intent/user?screen_name=simoneprimarosa
