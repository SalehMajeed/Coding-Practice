function printArray(arr) {
	let new_arr = [];
	for (let i = 1; i <= arr; i++) {
		new_arr.push(i);
	}
	return new_arr;
}
console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));
