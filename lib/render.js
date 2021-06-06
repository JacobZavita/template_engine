const { join } = require('path')
const fs = require('fs')

// delcare function for rendering an employee card to html
const render = employees => {
  const html = []
  html.push(employees.map(employee => renderEmploree(employee)))
  return renderMain(html.join(''))
}

