function invert_array(arr) {
	return arr.map(val => -val);
}

console.log(invert_array([1, 2, 3, 4, 5]));
console.log(invert_array([1, -2, 3, -4, 5]));
console.log(invert_array([]));
