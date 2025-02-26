function unique_sort(arr) {
	return Array.from(new Set(arr));
}
console.log(unique_sort([1, 2, 4, 3]));
console.log(unique_sort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
console.log(unique_sort([6, 7, 3, 2, 1]));
