function combinations(...num) {
	return num.reduce((acc, val) => {
		if (val != 0) {
			acc *= val;
		}
		return acc;
	}, 1);
}
console.log(combinations(2), 2);
console.log(combinations(2, 3), 6);
console.log(combinations(3, 5), 15);
console.log(combinations(5, 6, 7), 210);
console.log(combinations(5, 5, 5, 5), 625);
console.log(combinations(3, 6, 9), 162);
console.log(combinations(2, 3, 4, 5, 6, 7, 8, 9, 10), 3628800);
console.log(combinations(4, 5, 6), 120);
console.log(combinations(5, 6, 7, 8), 1680);
console.log(combinations(6, 7, 0), 42);
