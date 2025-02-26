Array.prototype.isEqual = function (arr, flag = false) {
	if (flag) {
		return this.every((val, index) => this.includes(arr[index]));
	}
	return this.every((val, index) => val == arr[index]);
};

console.log([1, 2, 3].isEqual([1, 2, 3]), true, 'Test #1 - Same order');
console.log([1, 2, 3].isEqual([1, 3, 2]), false, 'Test #2 - Different order, ignoreOrder = false');
console.log([7, 45, 'hello'].isEqual(['hello', 45, 7], true), true, 'Test #3 - Different order, ignoreOrder = true');
console.log([1, 2, 3].isEqual([1, 3, 2], true), true);
