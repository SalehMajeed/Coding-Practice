class Employee {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = `${this.firstname} ${this.lastname}`;
		this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
	}
}

emp1 = new Employee('John', 'Smith');
console.log(emp1.fullname);

emp2 = new Employee('Mary', 'Sue');
console.log(emp2.email);

emp3 = new Employee('Antony', 'Walker');
console.log(emp3.firstname);
