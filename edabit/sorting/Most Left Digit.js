function left_digit(num) {
	return num.replace(/\D/g, '')[0];
}

console.log(left_digit('TrAdE2W1n95!'));
console.log(left_digit('V3r1ta$'));
console.log(left_digit('U//DertHe1nflu3nC3'));
console.log(left_digit('J@v@5cR1PT'));
