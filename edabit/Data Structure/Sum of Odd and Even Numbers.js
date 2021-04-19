function sum_odd_and_even(arr) {
	let odd = 0,
		even = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			odd += arr[i];
		} else {
			even += arr[i];
		}
	}
	return [even, odd];
}

console.log(sum_odd_and_even([1, 2, 3, 4, 5, 6]));
console.log(sum_odd_and_even([-1, -2, -3, -4, -5, -6]));
console.log(sum_odd_and_even([0, 0]));
