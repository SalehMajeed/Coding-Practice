function return_only_integer(arr) {
	return arr.filter(val => typeof val == 'number' && val == parseInt(val));
}

console.log(return_only_integer([9, 2, 'space', 'car', 'lion', 16]));

console.log(return_only_integer(['hello', 81, 'basketball', 123, 'fox']));

console.log(return_only_integer([10, '121', 56, 20, 'car', 3, 'lion']));

console.log(return_only_integer(['String', true, 3.3, 1]));
