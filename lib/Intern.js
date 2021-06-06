const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role)
    this.school = school
  }
  getName() {
    return this.name
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return this.role
  }
  getSchool() {
    return this.school
  }
}

module.exports = Intern