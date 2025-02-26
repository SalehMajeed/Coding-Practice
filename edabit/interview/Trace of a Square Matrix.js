function getTrace(matrix) {
	if (matrix.length != matrix[0].length) {
		return 0;
	}
	return matrix.reduce((acc, val, index, arr) => (acc += arr[index][index]), 0);
}

console.log(
	getTrace([
		[0, 1, 0, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]),
	0
);
console.log(
	getTrace([
		[1, 1],
		[0, 42],
	]),
	43
);
console.log(
	getTrace([
		[1, 1, 0, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 0],
	]),
	0
);
console.log(
	getTrace([
		[0, 1],
		[0, 0],
		[0, 0],
	]),
	0
);
console.log(
	getTrace([
		[450, 1, 0, 0.789],
		[10000000, -450, 0, 1],
		[0, Math.PI, 2, -5],
		[0, 0, 0, 67],
	]),
	69
);
console.log(
	getTrace([
		[1.69, 1, 0],
		[10000000, 1.89, 0],
		[0, Math.PI, 2],
	]),
	5.58
);
