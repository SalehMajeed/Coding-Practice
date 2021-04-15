function assignment(d) {
	return /^\d{4}\/\d{2}\/\d{2}$/.test(d);
}

console.log(assignment('12/1/1'));
console.log(assignment('1234/12/01'));
console.log(assignment('2012/1/1'));
console.log(assignment('2012/01/07'));
