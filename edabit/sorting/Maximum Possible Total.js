function max_total(nums) {
	return nums
		.sort((a, b) => (a > b ? -1 : 1))
		.reduce((acc, val, index) => {
			if (index > 4) {
				return acc;
			}
			return (acc += val);
		}, 0);
}

console.log(max_total([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
console.log(max_total([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));
console.log(max_total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
