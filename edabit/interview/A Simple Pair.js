function simple_pair(arr, n) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] * arr[j] == n) {
				return [arr[i], arr[j]];
			}
		}
	}
	return null;
}

console.log(simple_pair([1, 2, 3], 3));
console.log(simple_pair([1, 2, 3], 6));
console.log(simple_pair([1, 2, 3], 9));
console.log(simple_pair([1, 2, 3], 3));
console.log(simple_pair([1, 2, 3], 6));
console.log(simple_pair([1, 2, 3], 7));
console.log(simple_pair([1, 2, 3, 6], 6));
console.log(simple_pair([1, 2, 3, 4, 5, 6], 15));
console.log(simple_pair([0, 0, 2], 4));
console.log(simple_pair([0, 0, 2, 2], 4));
console.log(simple_pair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4));
console.log(simple_pair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0));
console.log(simple_pair([-3, -2, -1, 0, 1, 2, 3, 4], 4));
