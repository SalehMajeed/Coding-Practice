function sum_fractions(arr) {
	let fractions = 0;
	for (const val of arr) {
		fractions += val[0] / val[1];
	}
	return Math.round(fractions);
}

console.log(
	sum_fractions([
		[18, 13],
		[4, 5],
	])
);
console.log(
	sum_fractions([
		[36, 4],
		[22, 60],
	])
);
console.log(
	sum_fractions([
		[11, 2],
		[3, 4],
		[5, 4],
		[21, 11],
		[12, 6],
	])
);
