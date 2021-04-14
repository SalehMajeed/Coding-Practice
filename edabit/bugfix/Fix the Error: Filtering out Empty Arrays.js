function remove_empty_arrays(arr) {
	return arr.filter(x => !Array.isArray(x));
}

console.log(remove_empty_arrays(['a', 'b', []]));
console.log(remove_empty_arrays([1, 2, [], 4]));
