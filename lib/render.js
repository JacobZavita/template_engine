const { join } = require('path')
const fs = require('fs')

const render = employees => {
  const html = []
  html.push(employees.filter(employee => employee.getRole() === 'Manager').map(manager => renderManager(manager)).join(""))
  html.push(employees.filter(employee => employee.getRole() === 'Engineer').map(engineer => renderEngineer(engineer)).join(""))
  html.push(employees.filter(employee => employee.getRole() === 'Intern').map(intern => renderIntern(intern)).join(""))
  return renderMain(html.join(''))
}

const renderManager = manager => {
  let template = fs.readFileSync(join(__dirname, '..', 'templates', 'manager.html'), 'utf8')
  template = replacePlaceholders(template, 'name', manager.getName())
  template = replacePlaceholders(template, 'id', manager.getId())
  template = replacePlaceholders(template, 'email', manager.getEmail())
  template = replacePlaceholders(template, 'role', manager.getRole())
  template = replacePlaceholders(template, 'officeNumber', manager.getOfficeNumber())
  return template
}

const renderEngineer = engineer => {
  let template = fs.readFileSync(join(__dirname, '..', 'templates', 'engineer.html'), 'utf8')
  template = replacePlaceholders(template, 'name', engineer.getName())
  template = replacePlaceholders(template, 'id', engineer.getId())
  template = replacePlaceholders(template, 'email', engineer.getEmail())
  template = replacePlaceholders(template, 'role', engineer.getRole())
  template = replacePlaceholders(template, 'github', engineer.getGithub())
  return template
}

const renderIntern = intern => {
  let template = fs.readFileSync(join(__dirname, '..', 'templates', 'intern.html'), 'utf8')
  template = replacePlaceholders(template, 'name', intern.getName())
  template = replacePlaceholders(template, 'id', intern.getId())
  template = replacePlaceholders(template, 'email', intern.getEmail())
  template = replacePlaceholders(template, 'role', intern.getRole())
  template = replacePlaceholders(template, 'school', intern.getSchool())
  return template
}

const renderMain = html => {
  const template = fs.readFileSync(join(__dirname, '..', 'templates', 'main.html'), 'utf8')
  return replacePlaceholders(template, 'main', html)
}

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp(`{{ ${placeholder} }}`, 'gm')
  return template.replace(pattern, value)
}

module.exports = render