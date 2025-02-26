function sum_digit(positiveInteger) {
	return String(positiveInteger)
		.split('')
		.reduce((acc, v) => acc + +v, 0);
}

console.log(sum_digit(111));
console.log(sum_digit(222));
console.log(sum_digit(333));
