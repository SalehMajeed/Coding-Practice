function nth_smallest(arr, n) {
	if (n - 1 >= arr.length) {
		return null;
	}
	return arr.sort((a, b) => (a > b ? 1 : -1))[n - 1];
}

console.log(nth_smallest([1, 3, 5, 7], 1));
console.log(nth_smallest([1, 3, 5, 7], 3));
console.log(nth_smallest([1, 3, 5, 7], 5));
console.log(nth_smallest([7, 3, 5, 1], 2));
