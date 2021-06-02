class User {
	static count = 0;
	constructor(name) {
		this.username = name;
		this.userCount = ++User.count;
	}
}

u1 = new User('johnsmith10');
console.log(u1.userCount);
u2 = new User('marysue1989');
console.log(u2.userCount);
u3 = new User('milan_rodrick');
console.log(u3.userCount);

console.log(u1.username);
console.log(u2.username);
console.log(u3.username);
