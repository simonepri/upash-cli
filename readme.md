<p align="center">
  <a href="https://github.com/simonepri/upash">
    <img src="https://github.com/simonepri/upash/raw/master/media/upash.png" alt="upash" width="300"/>
  </a>
</p>
<p align="center">
  <!-- CI - TravisCI -->
  <a href="https://travis-ci.com/simonepri/upash-cli">
    <img src="https://img.shields.io/travis/com/simonepri/upash-cli/master.svg?label=MacOS%20%26%20Linux" alt="Mac/Linux Build Status" />
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

  <!-- Mentioned - Awesome NodeJS -->
  <a href="https://github.com/sindresorhus/awesome-nodejs#security">
    <img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome NodeJS" />
  </a>
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
  <a href="https://www.npmjs.com/package/upash-cli">
    <img src="https://img.shields.io/npm/v/upash-cli.svg" alt="Latest version on npm" />
  </a>
  <!-- License - MIT -->
  <a href="https://github.com/simonepri/upash-cli/tree/master/license">
    <img src="https://img.shields.io/github/license/simonepri/upash-cli.svg" alt="Project license" />
  </a>
</p>
<p align="center">
  🌌 Hash password directly from your terminal.

  <br/>

  <sub>
    Coded with ❤️ by <a href="#authors">Simone Primarosa</a>.
  </sub>
</p>

## Synopsis
<img src="https://github.com/simonepri/upash/raw/master/media/cli.gif" alt="upash cli" width="400" align="right"/>

This package is part of the [upash][home] project,
which aim is to provide a unified and user-friendly APIs for all the passwords
hashing algorithms out there.  

In particular, this package allows you to use multiple password hashing
algorithms through a simple CLI.

## Install
```bash
npm install -g upash-cli
```

## Help
```
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
  $ upash hash argon2 'Hello World'
  $ upash verify pbkdf2 'hash string' 'Hello World'
  $ upash hash bcrypt 'Hello World' --rounds=10
```

## Supported password hashing algorithms
- [@phc/argon2][argon2] -
🔒 Node.JS argon2 password hashing algorithm following the PHC string format.
- [@phc/scrypt][scrypt] -
🔒 Node.JS scrypt password hashing algorithm following the PHC string format.
- [@phc/bcrypt][bcrypt] -
🔒 Node.JS bcrypt password hashing algorithm following the PHC string format.
- [@phc/pbkdf2][pbkdf2] -
🔒 Node.JS pbkdf2 password hashing algorithm following the PHC string format.

## Contributing
Contributions are REALLY welcome and if you find a security flaw in this code,
PLEASE [report it][new issue].  

## Authors
- **Simone Primarosa** - *Github* ([@simonepri][github:simonepri]) • *Twitter* ([@simoneprimarosa][twitter:simoneprimarosa])

See also the list of [contributors][contributors] who participated in this project.

## License
This project is licensed under the MIT License - see the [license][license] file for details.

<!-- Links -->
[home]: https://github.com/simonepri/upash

[start]: https://github.com/simonepri/upash-cli#start-of-content
[new issue]: https://github.com/simonepri/upash-cli/issues/new
[contributors]: https://github.com/simonepri/upash-cli/contributors

[license]: https://github.com/simonepri/upash-cli/tree/master/license

[argon2]: https://github.com/simonepri/phc-argon2
[scrypt]: https://github.com/simonepri/phc-scrypt
[bcrypt]: https://github.com/simonepri/phc-bcrypt
[pbkdf2]: https://github.com/simonepri/phc-pbkdf2

[github:simonepri]: https://github.com/simonepri
[twitter:simoneprimarosa]: http://twitter.com/intent/user?screen_name=simoneprimarosa
