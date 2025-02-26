function cons(arr) {
	return arr
		.sort((a, b) => (a > b ? 1 : -1))
		.slice(1)
		.every((val, index) => arr[index] == val - 1);
}

console.log(cons([5, 1, 4, 3, 2]));
console.log(cons([5, 1, 4, 3, 2, 8]));
console.log(cons([5, 6, 7, 8, 9, 9]));
