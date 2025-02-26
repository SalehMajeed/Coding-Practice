function encrypt(str) {
	const code = {
		a: 0,
		e: 1,
		i: 2,
		o: 2,
		u: 3,
	};
	return (
		str
			.split('')
			.reverse()
			.join('')
			.replace(/[aeiou]/gi, function (val) {
				return code[val];
			}) + 'aca'
	);
}

console.log(encrypt('karaca'), '0c0r0kaca');
console.log(encrypt('burak'), 'k0r3baca');
console.log(encrypt('banana'), '0n0n0baca');
console.log(encrypt('alpaca'), '0c0pl0aca');
console.log(encrypt('hello'), '2ll1haca');
