function find_largest_nums(arr) {
	const largest_numbers = [];
	for (const val of arr) {
		largest_numbers.push(Math.max(...val));
	}
	return largest_numbers;
}

console.log(
	find_largest_nums([
		[4, 2, 7, 1],
		[20, 70, 40, 90],
		[1, 2, 0],
	])
);
console.log(
	find_largest_nums([
		[-34, -54, -74],
		[-32, -2, -65],
		[-54, 7, -43],
	])
);
console.log(
	find_largest_nums([
		[0.4321, 0.7634, 0.652],
		[1.324, 9.32, 2.5423, 6.4314],
		[9, 3, 6, 3],
	])
);
