'use strict'

module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/coverage/',
  testMatch: ['<rootDir>/test/**/*.ts'] //   testMatch: ['**/test/**/*.[jt]s?(x)'],
}
