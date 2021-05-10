function fizz_buzz(number) {
	return Array(number)
		.fill(0)
		.map((val, index) =>
			(index + 1) % 3 == 0 && (index + 1) % 5 == 0
				? 'FizzBuzz'
				: (index + 1) % 3 == 0
				? 'Fizz'
				: (index + 1) % 5 == 0
				? 'Buzz'
				: index + 1
		);
}

console.log(fizz_buzz(10));
console.log(fizz_buzz(15));
