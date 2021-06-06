class Employee {
  constructor(name, id, email, role) {
    this.name = name
    this.id = id
    this.email = email
    this.role = role
  }
  getName () {
    return this.name
  }
  getId () {
    return this.id
  }
  getEmail () {
    return this.email
  }
  getRole () {
    return this
  }
}

const employee1 = new Employee('John', '1234', 'john@email.com', 'Employee')

module.exports = Employee