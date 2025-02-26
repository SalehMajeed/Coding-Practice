function remove_smallest(arr) {
	const min_val = Math.min(...arr);
	const index = arr.indexOf(min_val);
	arr.splice(index, 1);
	return arr;
}

console.log(remove_smallest([1, 2, 3, 4, 5]));
console.log(remove_smallest([5, 3, 2, 1, 4]));
console.log(remove_smallest([2, 2, 1, 2, 1]));
