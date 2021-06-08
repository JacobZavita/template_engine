const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

test('getRole() returns "Engineer"', () => {
  const role = new Engineer('Engineer')
  expect(Engineer.getRole()).toBe('Engineer')
}) 

test('getGithub() returns github', () => {
  const github = new Engineer('bobbyboy')
  expect(Engineer.getGithub()).toBe('bobbyboy')
})