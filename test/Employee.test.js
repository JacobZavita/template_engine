const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee.js')

test('getName() returns name', () => {
  const name = new Employee('John')
  expect(employee.getName()).toBe('John')
})

test('getId() returns id', () => {
  const id = new Employee('1234')
  expect(employee.getId()).toBe('1234')
})

test('getEmail() returns email', () => {
  const email = new Employee('john@email.com')
  expect(employee.getEmail()).toBe('john@email.com')
})

test('getRole() returns role', () => {
  const role = new Employee('Employee')
  expect(employee.getRole()).toBe('Employee')
})