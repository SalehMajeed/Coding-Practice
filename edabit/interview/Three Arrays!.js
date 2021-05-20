function sum_common(arr1, arr2, arr3) {
	const common = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
			common.push(arr1[i]);
			delete arr2[arr2.indexOf(arr1[i])];
			delete arr3[arr3.indexOf(arr1[i])];
		}
	}
	return common.reduce((acc, val) => (acc += val), 0);
}

console.log(sum_common([1, 2, 3], [5, 3, 2], [7, 3, 2]));
console.log(sum_common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));
console.log(sum_common([1], [1], [1]));
console.log(sum_common([1], [1], [2]));
console.log(sum_common([1, 2, 2, 3, 2], [5, 3, 2, 2, 1], [7, 3, 2, 2, 1]));
