function reverse(number) {
	let new_number = 0;

	while (number != 0) {
		new_number = new_number * 10 + (number % 10);
		number = parseInt(number / 10);
	}

	if (reversed_number > 2147483647 || reversed_number < -2147483648) return 0;

	return new_number;
}
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
