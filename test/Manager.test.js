const { test, expect } = require('@jest/globals')
const Manager = require('../lib/Manager.js')

test('getOfficeNumber() returns officeNumber', () => {
  const officeNumber = new Manager('7')
  expect(officeNumber.getName()).toBe('7')
})

test('getRole() returns role', () => {
  const role = new Manager('Manager')
  expect(role.getRole()).toBe('Manager')
})