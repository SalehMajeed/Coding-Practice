function howBad(num) {
	const res_arr = [];
	const str_num = String(num.toString(2));
	const binary_sum = [...str_num].reduce((acc, val) => (acc += +val), 0);
	if (binary_sum % 2 == 0) {
		res_arr.push('Evil');
	} else {
		res_arr.push('Odious');
	}
	if (is_prime(binary_sum)) {
		res_arr.push('Pernicious');
	}
	return res_arr;
}

function is_prime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

console.log(howBad(7), ['Odious', 'Pernicious']);
console.log(howBad(97), ['Odious', 'Pernicious']);
console.log(howBad(66), ['Evil', 'Pernicious']);
console.log(howBad(77), ['Evil']);
console.log(howBad(128), ['Odious']);
console.log(howBad(666), ['Odious', 'Pernicious'], '666 is not evil after all!');
console.log(howBad(987654321), ['Odious', 'Pernicious']);
console.log(howBad(98765), ['Evil']);
