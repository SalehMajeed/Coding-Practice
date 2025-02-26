function remove_element(nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
}

console.log(remove_element([3, 2, 2, 3], 3));
console.log(remove_element([0, 1, 2, 2, 3, 0, 4, 2], 2));
