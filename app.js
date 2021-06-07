const render = require('./lib/render.js')
const Employee = require('./lib/Employee.js')
const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const { prompt } = require('inquirer')
const path = require("path")
const { join } = require('path')
const fs = require("fs")
const employees = []
// const team = []

// const employee1 = new Employee('John', '1234', 'john@email.com', 'Employee')

// console.log(employee1.getName())
// console.log(employee1.getId())
// console.log(employee1.getEmail())
// console.log(employee1.getRole())

function promptManager() {
  return prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Manager name:'
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
      type: 'input',
      name: 'officeNumber',
      message: 'Manager office number:'
    },
    {
      type: 'list',
      name: 'nextEntry',
      message: 'Would you like to add another Engineer or Intern?',
      choices: ['Engineer', 'Intern', 'No thanks, all done']
    }
  ])
}

function promptEngineer(){
  return prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Engineer name:'
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
      type: 'input',
      name: 'github',
      message: 'What is their GitHub username?'
    },
    {
      type: 'list',
      name: 'nextEntry',
      message: 'Would you like to add another Engineer or Intern?',
      choices: ['Engineer', 'Intern', 'No thanks, all done']
    }
  ])
}

function promptIntern() {
  return prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Intern name:'
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
      type: 'input',
      name: 'school',
      message: 'What is their school?'
    },
    {
      type: 'list',
      name: 'nextEntry',
      message: 'Would you like to add another Engineer or Intern?',
      choices: ['Engineer', 'Intern', 'No thanks, all done']
    }
  ])
}

const createEngineer = () => {
  promptEngineer().then(function(response){
    const engineer = new Engineer(response.name, response.id, response.email. response.github)
    if (response.another == 'Engineer'){
      employees.push(engineer)
      createEngineer()
    } else if (response.another == 'Intern'){
      employees.push(engineer)
      createIntern()
    } else if (response.another == 'No thanks, all done'){
      employees.push(engineer)

      fs.writeFile(join(__dirname, 'output', 'index.html'), render(employees), err => {
        if (err) { console.log(err) }
        console.log('Team page generated!')
      })
      return
    }
  })
}

const createIntern = () => {
  promptIntern().then(function (response) {
    const intern = new Intern(response.name, response.id, response.email.response.school)
    if (response.another == 'Engineer') {
      employees.push(intern)
      createEngineer()
    } else if (response.another == 'Intern') {
      employees.push(intern)
      createIntern()
    } else if (response.another == 'No thanks, all done') {
      employees.push(intern)

      fs.writeFile(join(__dirname, 'output', 'index.html'), render(employees), err => {
        if (err) { console.log(err) }
        console.log('Team page generated!')
      })
      return
    }
  })
}

const createManager = () => {
  promptManager().then(function (response) {
    const manager = new Manager(response.name, response.id, response.email.response.officeNumber)
    if (response.another == 'Engineer') {
      employees.push(manager)
      createEngineer()
    } else if (response.another == 'Intern') {
      employees.push(manager)
      createIntern()
    } else if (response.another == 'No thanks, all done') {
      employees.push(manager)

      fs.writeFile(join(__dirname, 'output', 'index.html'), render(employees), err => {
        if (err) { console.log(err) }
        console.log('Team page generated!')
      })
      return
    }
  })
}

createManager()

// const createEmployee = () => {
//   prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Employee name:'
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'id:'
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'email:'
//     },
//     {
//       type: 'list',
//       name: 'role',
//       message: 'role:',
//       choices: ['Manager', 'Engineer', 'Intern']
//     }
//   ])
//     .then(({ name, id, email, role }) => {
//       employees.push(new Employee(name, id, email, role))
//       // if (role === 'Engineer') {
//       //   console.log('chose engineer')
//       //   prompt({
//       //     type: 'input',
//       //     name: 'github',
//       //     message: 'what is their GitHub username?'
//       //   })
//       //   .then(({ name, id, email, role, github }) => {
//       //     employees.push(new Engineer(name, id, email, role, github))
//       //   })
//       // }
//       prompt({
//         type: 'confirm',
//         name: 'cont',
//         message: 'Add another team member?'
//       })
//       .then(({ cont }) => {
//         if (cont) {
//           createEmployee()
//         } else {
//           fs.writeFile(join(__dirname, 'output', 'index.html'), render(employees), err => {
//             if (err) { console.log(err) }
//             console.log('Team page generated!')
//           })
//         }
//       })
//     })
//     .catch(err => console.log(err))
// }

// createEmployee()