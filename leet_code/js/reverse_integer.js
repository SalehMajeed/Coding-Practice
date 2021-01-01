function reverse(number) {
	let new_number = 0;
	while (number != 0) {
		new_number = new_number * 10 + (number % 10);
		number = parseInt(number / 10);
	}

	if (new_number < Math.pow(2, 31) * -1 || new_number > Math.pow(2, 31) - 1) return 0;
	return new_number;
}
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
