const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, role) {
    super(name, id, email, role)
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
}

module.exports = Manager