'use strict'

module.exports = {
  collectCoverage: true,
  testMatch: ['**/test/**/*.[jt]s?(x)'],
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/coverage/'
}
