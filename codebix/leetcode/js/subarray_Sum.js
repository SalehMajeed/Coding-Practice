function subarray_sum(arr, k) {
	let ans = 0;
	let sum = 0;
	const map = { 0: 1 };

	for (let n of arr) {
		sum += n;
		if (sum - k in map) {
			ans += map[sum - k];
		}
		map[sum] = (map[sum] || 0) + 1;
	}
	return ans;
}

console.log(subarray_sum([10, 5, 7, 1, 2, 5, 3], 15));
console.log(subarray_sum([1, 1, 1], 2));
console.log(subarray_sum([1, 2, 3], 3));
console.log(subarray_sum([1, -1, 0], 0));
