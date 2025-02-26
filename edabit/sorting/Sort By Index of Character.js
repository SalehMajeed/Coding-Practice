function sort_by_character(arr, n) {
	return arr.sort((a, b) => (a[n - 1] > b[n - 1] ? 1 : -1));
}

console.log(sort_by_character(['az16', 'by35', 'cx24'], 2));
console.log(sort_by_character(['mayor', 'apple', 'petal'], 5));
console.log(sort_by_character(['mate', 'team', 'bade'], 3));
