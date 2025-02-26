function countTrue(arr) {
	return arr.reduce((acc, v) => (acc += +v), 0);
}

console.log(countTrue([true, false, false, true, false]));

console.log(countTrue([false, false, false, false]));

console.log(countTrue([]));
