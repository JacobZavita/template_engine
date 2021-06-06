const { join } = require('path')
const fs = require('fs')

// delcare function for rendering an employee card to html
const render = employees => {
  const html = []
  html.push(employees.map(employee => renderEmployee(employee)))
  return renderMain(html.join(''))
}

const renderEmployee = employee => {
  let template = fs.readFileSync(join(__dirname, '..', 'templates', 'card.html'), 'utf8')
  template = replacePlaceholders(template, 'name', employee.getName())
  template = replacePlaceholders(template, 'id', employee.getId())
  template = replacePlaceholders(template, 'email', employee.getEmail())
  template = replacePlaceholders(template, 'role', employee.getRole())
  return template
}