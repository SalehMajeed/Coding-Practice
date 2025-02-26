function accumulatingArray(arr) {
	for (let i = 1; i < arr.length; i++) {
		arr[i] += arr[i - 1];
	}
	return arr;
}

console.log(accumulatingArray([1, 2, 3, 4]));
console.log(accumulatingArray([1, 5, 7]));
console.log(accumulatingArray([1, 0, 1, 0, 1]));
console.log(accumulatingArray([]));
