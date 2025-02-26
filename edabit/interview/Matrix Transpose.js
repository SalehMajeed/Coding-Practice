function makeTranspose(arr) {
	const res = [];
	for (let i = 0; i < arr[0].length; i++) {
		res[i] = new Array();
		for (let j = 0; j < arr.length; j++) {
			res[i][j] = arr[j][i];
		}
	}
	return res;
}

console.log(
	makeTranspose([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
	[
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
	]
);
console.log(
	makeTranspose([
		[1, 2],
		[3, 4],
		[5, 6],
	]),
	[
		[1, 3, 5],
		[2, 4, 6],
	]
);
console.log(
	makeTranspose([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]),
	[
		[1, 3, 5, 7, 9],
		[2, 4, 6, 8, 10],
	]
);
console.log(makeTranspose([[42]]), [[42]]);
console.log(makeTranspose([[0.5, 0.6, 0.8]]), [[0.5], [0.6], [0.8]]);
console.log(makeTranspose([[0, 0]]), [[0], [0]]);
console.log(makeTranspose([['a', 'b']]), [['a'], ['b']]);
