function unique_in_order(sequence) {
	const unique = [];
	for (let i = 0; i <= sequence.length - 1; i++) {
		if (sequence[i] != sequence[i + 1]) {
			unique.push(sequence[i]);
		}
	}
	return unique;
}

console.log(unique_in_order('AAAABBBCCDAABBB'));
console.log(unique_in_order('ABBCcAD'));
console.log(unique_in_order([1, 2, 2, 3, 3]));
