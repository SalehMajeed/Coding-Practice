function sortArray(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		let val = Math.min(...arr);
		let index = arr.indexOf(val);
		arr[index] = Infinity;
		result.push(val);
	}
	return result;
}

console.log(sortArray([2, -5, 1, 4, 7, 8]));
console.log(sortArray([23, 15, 34, 17, -28]));
console.log(sortArray([38, 57, 45, 18, 47, 39]));
