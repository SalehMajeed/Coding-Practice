function search_position(nums, target) {
	if (nums.includes(target)) {
		return nums.indexOf(target);
	} else {
		const min = Math.min(...nums);
		const max = Math.max(...nums);
		if (target > max) {
			return nums.indexOf(max) + 1;
		} else if (target < min) {
			return 0;
		} else {
			for (let i = 0; i < nums.length - 1; i++) {
				if (target > nums[i] && target < nums[i + 1]) {
					return i + 1;
				}
			}
		}
	}
}

console.log(search_position([1, 3, 5, 6], 5)); // 2
console.log(search_position([1, 3, 5, 6], 2)); // 1
console.log(search_position([1, 3, 5, 6], 7)); // 4
console.log(search_position([1, 3, 5, 6], 0)); // 0
console.log(search_position([1], 0)); // 0
console.log(search_position([3, 6, 7, 8, 10], 5)); // 1
console.log(search_position([1, 3], 2)); // 1
