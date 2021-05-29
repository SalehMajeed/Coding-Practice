class Name {
	constructor(fname, lname) {
		this.fname = fname;
		this.lname = lname;
		this.fullname = fname + ' ' + lname;
		this.initials = fname[0].toUpperCase() + '.' + lname[0].toUpperCase();
	}
}

const a1 = new Name('john', 'SMITH');

console.log(a1.fname);
console.log(a1.lname);
console.log(a1.fullname);
console.log(a1.initials);
