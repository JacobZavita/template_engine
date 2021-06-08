const { test, expect } = require('@jest/globals')
const Intern = require('../lib/Intern.js')

test('getSchool() returns school', () => {
  const school = new Intern('UCI')
  expect(Intern.getSchool()).toBe('UCI')
})

test('getRole() returns role', () => {
  const role = new Intern('intern')
  expect(Intern.getRole()).toBe('intern')
})