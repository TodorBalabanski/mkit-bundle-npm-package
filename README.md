# :blue_book: mkit-bundle-npm-package

> Micro npm package project bundle

_Slightly opinionated_ `npm` package starter template supporting various best practices.

Ever wanted to create and publish your own `npm` package? And you still want to use all the latest JS features, (es)lint, prettify, tests... **Say No More!** 

**Bug reports and PRs are more than welcome!**

## Motivation

This project strives to deliver clean folder structure and satisfying development experience. **Easy.**

**Zero boilerplate configuration.** As simple as `npm install` and you're all set to start writing `your own code!` Without having X folders with Y configuration files that you're never supposed to modify.

There are several boilerplates out there, but we felt they all miss a thing or two. Nowadays, tools as linting, code formatting and tests are must-haves and should be part of every modern JS project. So why bother setting them all again and again?

## Features

- [X] :100: **Latest JS Support**
- [X] :top: **Latest Babel 7**
- [X] :zap: **Eslint, Prettier, EditorConfig**
- [X] :open_file_folder: **Clean folder Structure**
- [X] :white_check_mark: **Tests with Jest**
- [X] :chart_with_upwards_trend: **Test Coverage Report**
- [X] :rocket: **Production Build**
- [X] :tada: **Prepublish Process**
- [X] :construction_worker: **`npm run` all the things**
- [X] :vertical_traffic_light: **Pre-commit hooks**
- [X] :blue_book: **Examples**

## Getting Started

### Installation

These simple steps will get you a copy of the project, make it your own and let you start hacking right away!

1. Clone the repository
```
git clone https://github.com/mkitio/mkit-bundle-npm-package.git <your-project-name>
```

2. Make it your own
```
cd <your-project-name> && rm -rf .git && git init
```

2. Install the dependencies
```
npm install
```

3. Test your installation
```
npm run test
```

4. Start hacking!
```
# code and have fun
npm run test:examples
```

_You would want to test your code while developing. The `/examples` folder can serve you good or you can always run scripts like `npm run <your-script>`._

### Folder Structure

```
.
├── __tests__             # Test files
├── examples              # Examples and demo code (for ref., can be out of version control)
├── lib                   # Build destination (autogenerated, out of version control)
├── src                   # Source files
├── LICENSE
├── README.md
├── ...
└── package.json
```

## Available Scripts

In the project directory, you can run:

```
# Clean the build folder `/lib`
npm run clean

# Run all Tests
npm run test

# Run all Tests in continuous `--watch` mode
npm run test:watch

# Run all Tests and generate Coverage Report
npm run test:coverage

# Run all `/examples`
npm run test:examples

# Run all Tests against Production environment
npm run test:prod

# Lint all `/src` files
npm run lint

# Build against Production environment
npm run build

# Prepare package for publishing
npm run prepublish
```

## Tests

This project uses [Jest](https://jestjs.io) as its test runner. 

Jest will look for test files in the `/__tests__` folder and its contents. We recommend naming your test files with `.test.js` suffix. However, Jest will automatically search for any files with `{.js, .test.js, .spec.js}` extensions.

Coverage Report collects information from all `.js` files in the `/src` folder.

If you want to tweak Jest, you can do it in `package.json` or follow the official [configuration docs](https://jestjs.io/docs/en/configuration.html).

## Versioning

This project uses [Semantic Versioning, a.k.a. Semver](https://semver.org/).

Each release is tagged by:
```
git tag -a v1.0 -m "Release v1.0"
npm publish --tag <tag>
```

## Authors

**Stoyan Merdzhanov** - Initial work - [MK IT](https://mkit.io)

See also the list of [contributors](https://github.com/mkitio/mkit-bundle-npm-package/contributors) who participated in this project.

## License

```
The MIT License (MIT)

Copyright (c) 2018-present MK IT Ltd. <hi@mkit.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
