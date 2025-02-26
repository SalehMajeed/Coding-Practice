class OnesThreesNines {
	constructor(val) {
		this.ones = parseInt(val / 1);
		this.threes = parseInt(val / 3);
		this.nines = parseInt(val / 9);
	}
}

const n1 = new OnesThreesNines(5);

console.log(n1.ones);
console.log(n1.threes);
console.log(n1.nines);
