const render = require('./lib/render.js')
const Employee = require('./lib/Employee.js')
const { prompt } = require('inquirer')
const path = require("path")
const { join } = require('path')
const fs = require("fs")
const employees = []

// const employee1 = new Employee('John', '1234', 'john@email.com', 'Employee')

// console.log(employee1.getName())
// console.log(employee1.getId())
// console.log(employee1.getEmail())
// console.log(employee1.getRole())

const createEmployee = () => {
  prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Employee name:'
    },
    {
      type: 'input',
      name: 'id',
      message: 'id:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'email:'
    },
    {
      type: 'list',
      name: 'role',
      message: 'role:',
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ])
    .then(({ name, id, email, role }) => {
      employees.push(new Employee(name, id, email, role))
      prompt({
        type: 'confirm',
        name: 'cont',
        message: 'Add another team member?'
      })
        .then(({ cont }) => {
          if (cont) {
            createEmployee()
          } else {
            fs.writeFile(join(__dirname, 'output', 'index.html'), render(employees), err => {
              if (err) { console.log(err) }
              console.log('Team page generated!')
            })
          }
        })
    })
    .catch(err => console.log(err))
}

createEmployee()