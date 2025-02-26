function sort_it(arr) {
	return arr.sort((a, b) => (a > b ? 1 : -1));
}

console.log(sort_it([4, 1, 3]));
console.log(sort_it([[4], [1], [3]]));
console.log(sort_it([4, [1], 3]));
console.log(sort_it([[4], 1, [3]]));
console.log(sort_it([[3], 4, [2], [5], 1, 6]));
