function sort_nums_ascending(arr) {
	if (arr == null) {
		return [];
	}
	return arr.sort((a, b) => (a > b ? 1 : -1));
}

console.log(sort_nums_ascending([1, 2, 10, 50, 5]));
console.log(sort_nums_ascending([80, 29, 4, -95, -24, 85]));
console.log(sort_nums_ascending(null));
console.log(sort_nums_ascending([]));
