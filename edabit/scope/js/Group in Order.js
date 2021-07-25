function group(arr, size) {
	const res = new Array(Math.ceil(arr.length / size));
	for (let i = 0; i < arr.length; i++) {
		const current_position = i % res.length;
		if (typeof res[current_position] == 'undefined') {
			res[current_position] = [];
			res[current_position].push(arr[i]);
		} else {
			res[current_position].push(arr[i]);
		}
	}
	return res;
}

console.log(group([1, 2, 3, 4], 2), [
	[1, 3],
	[2, 4],
]);
console.log(group([1, 2, 3, 4, 5, 6, 7], 4), [
	[1, 3, 5, 7],
	[2, 4, 6],
]);
console.log(group([1, 2, 3, 4, 5], 1), [[1], [2], [3], [4], [5]]);
console.log(group([1, 2, 3, 4, 5, 6], 4), [
	[1, 3, 5],
	[2, 4, 6],
]);
console.log(group([1, 2, 3, 4, 5, 6], 3), [
	[1, 3, 5],
	[2, 4, 6],
]);
console.log(group([1, 2, 3, 4, 5, 6], 2), [
	[1, 4],
	[2, 5],
	[3, 6],
]);
console.log(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4), [
	[1, 4, 7, 10],
	[2, 5, 8, 11],
	[3, 6, 9],
]);
console.log(group([1, 2, 3, 4, 5, 6, 7, 8], 2), [
	[1, 5],
	[2, 6],
	[3, 7],
	[4, 8],
]);
