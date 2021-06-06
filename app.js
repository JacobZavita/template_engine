const Employee = require('./lib/Employee.js')
const { prompt } = require('inquirer')
const path = require("path")
const fs = require("fs")

const employee1 = new Employee('John', '1234', 'john@email.com', 'Employee')

console.log(employee1.getName())
console.log(employee1.getId())
console.log(employee1.getEmail())
console.log(employee1.getRole())

