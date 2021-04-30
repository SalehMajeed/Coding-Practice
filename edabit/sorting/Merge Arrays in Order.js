function merge_sort(arr1, arr2) {
	return [...arr1, ...arr2].sort((a, b) => (a > b ? 1 : -1));
}

console.log(merge_sort([1, 2, 3], [5, 4, 6]));
console.log(merge_sort([8, 6, 4, 2], [-2, -6, 0, -4]));
console.log(merge_sort([120, 180, 200], [190, 175, 130]));
