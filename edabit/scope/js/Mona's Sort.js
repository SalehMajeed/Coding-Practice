function numberOfSwaps(arr) {
	let number_sort = 0;
	arr.sort((a, b) => {
		if (a > b) {
			number_sort++;
		}
		return a > b ? 1 : -1;
	});
	return number_sort;
}

console.log(numberOfSwaps([5, 4, 3]));
console.log(numberOfSwaps([1, 3, 4, 5]));
console.log(numberOfSwaps([5, 4, 3, 2]));
