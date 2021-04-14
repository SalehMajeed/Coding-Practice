function increment_items(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] + 1;
	}
	return arr;
}

console.log(increment_items([0, 1, 2, 3]));
console.log(increment_items([2, 4, 6, 8]));
console.log(increment_items([-1, -2, -3, -4]));
