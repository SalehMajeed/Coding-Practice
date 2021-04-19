function rotate_by_one(arr) {
	return [arr.pop(), ...arr];
}

console.log(rotate_by_one([1, 2, 3, 4, 5]));
console.log(rotate_by_one([6, 5, 8, 9, 7]));
console.log(rotate_by_one([20, 15, 26, 8, 4]));
