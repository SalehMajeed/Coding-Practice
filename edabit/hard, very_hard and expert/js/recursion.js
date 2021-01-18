// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
function getLength(arr) {
	if (arr.length <= 1) return 1;
	if (typeof arr[arr.length - 1] == 'object') {
		const val = arr.pop();
		return getLength(val);
	}
	arr.pop();

	return 1 + getLength(arr);
}
console.log(getLength([1, [2, 3, 4, 6, [10, 11]]]));
// console.log(getLength([1, [2, [3, 4]]]));
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
// console.log(getLength([1, [2], 1, [2], 1]));
