function basic_calculator(a, o, b) {
	var result = 0;
	if (o == '+') {
		return a + b;
	} else if (o == '-') {
		return a - b;
	} else if (o == '/') {
		if (b == 0) {
			return null;
		}
		return a / b;
	} else if (o == '*') {
		return a * b;
	}
	return null;
}

console.log(basic_calculator(2, '+', 4));

console.log(basic_calculator(6, '-', 5));

console.log(basic_calculator(12, '/', 3));

console.log(basic_calculator(3, '*', 4));

console.log(basic_calculator(1, '/', 0));

console.log(basic_calculator(1, 'x', 0));
