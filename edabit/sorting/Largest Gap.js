function largest_gap(arr) {
	arr.sort((a, b) => (a > b ? 1 : -1));
	return Math.max(...arr.map((val, index) => index && val - arr[index - 1]));
}

console.log(largest_gap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]));
console.log(largest_gap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]));
console.log(largest_gap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]));
