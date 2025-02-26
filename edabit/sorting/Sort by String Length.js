function sort_by_length(arr) {
	return arr.sort((a, b) => (a.length > b.length ? 1 : -1));
}

console.log(sort_by_length(['a', 'ccc', 'dddd', 'bb']));
console.log(sort_by_length(['apple', 'pie', 'shortcake']));
console.log(sort_by_length(['may', 'april', 'september', 'august']));
console.log(sort_by_length([]));
