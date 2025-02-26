function move_zeros(arr) {
	let count = 0;
	return [
		...arr.filter(val => {
			if (val === 0) {
				count++;
			}
			return val !== 0;
		}),
		...Array(count).fill(0),
	];
}

console.log(move_zeros([1, 0, 1, 2, 0, 1, 3]));
console.log(move_zeros([0, 1, null, 2, false, 1, 0]));
console.log(move_zeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));
