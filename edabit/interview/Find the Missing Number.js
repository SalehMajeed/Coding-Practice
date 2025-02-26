function missing_num(arr) {
	return 55 - arr.reduce((acc, val) => (acc += val), 0);
}

console.log(missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9]));
