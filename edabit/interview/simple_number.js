function simple_numbers(a, b) {
	const res = [];
	for (let i = a; i <= b; i++) {
		if (is_simple_number(i)) {
			res.push(i);
		}
	}
	return res;
}

function is_simple_number(num) {
	const fixed_num = num;
	let total = 0;
	let power = String(num).length;
	while (num > 0) {
		total += (num % 10) ** power--;
		num = parseInt(num / 10);
	}
	return total == fixed_num;
}

console.log(simple_numbers(1, 10));
console.log(simple_numbers(1, 100));
console.log(simple_numbers(90, 100));
