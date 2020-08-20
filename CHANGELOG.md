# Changelog


## [2.1.0](https://github.com/supercharge/queue-datastructure/compare/v2.0.0...v2.1.0) - 2020-08-20

### Updated
- move tests to TypeScript
- test directly the TypeScript code via `ts-jest`
- point `main` in `package.json` to export the transpiled code
- point `types` in `package.json` to export the types from the transpiled code

### Removed
- deleted `index.js` file which acted as a middleman to export the transpiled code


## [2.0.0](https://github.com/supercharge/queue-datastructure/compare/v1.3.1...v2.0.0) - 2020-08-16

### Added
- make the queue generic
- making the queue generic enables IntelliSense support for items
- implement the `Iterable` interface via `[Symbol.iterator]` to allow iterators and `for..of` loops

### Updated
- test with jest
- use [`@supercharge/tsconfig`](https://github.com/supercharge/tsconfig) as the base TypeScript config

### Breaking Changes
This version transitions the queue instance to a generic queue. This enforces queue items to be of the same type when using TypeScript. You probably used the queue already for items of the same type. If not, `2.0` may be a breaking change for you.


## [1.3.1](https://github.com/supercharge/queue-datastructure/compare/v1.3.0...v1.3.1) - 2020-04-20

### Updated
- use ES2017 as output target (Node.js v8)

### Fixed
- secret token to publish the package in the GitHub Package Registry


## [1.3.0](https://github.com/supercharge/queue-datastructure/compare/v1.2.0...v1.3.0) - 2020-04-14

### Added
- link `types` in `package.json`
- the `.clear` method returns the queue instance allowing fluent method calls

### Updated
- bump dependencies
- use TypeScript in tests
- run tests with `lab-transform-typescript`
- update GitHub token in publish workflow


## [1.2.0](https://github.com/supercharge/queue-datastructure/compare/v1.1.1...v1.2.0) - 2020-04-13

### Added
- the `.enqueue` method returns the queue instance allowing fluent method calls
- the `.clear` method returns the queue instance allowing fluent method calls

### Updated
- migrated code base to TypeScript
  - this automatically creates typings while transpiling the code

### Removed
- moved to GitHub Actions for testing and removed `.travis.yml`


## [1.1.1](https://github.com/supercharge/queue-datastructure/compare/v1.1.0...v1.1.1) - 2019-09-24

### Updated
- bump dependencies
- fix typo in Readme
- refine tests


## [1.1.0](https://github.com/supercharge/queue-datastructure/compare/v1.0.1...v1.1.0) - 2019-07-17

### Added
- `.items()` method returning the queue’s items as an array

### Updated
- remove `lodash` as a dependency


## [1.0.1](https://github.com/supercharge/queue-datastructure/compare/v1.0.0...v1.0.1) - 2019-07-12

### Updated
- bump dependencies
- fix code formatting for Standard.js v13
- update image URLs for Travis and NPM badges


## 1.0.0 - 2019-07-05

### Added
- `1.0.0` release 🚀 🎉
