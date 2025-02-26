function sum_array(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(sum_array([1, 2, 3, 4, 5]));

console.log(sum_array([-1, 0, 1]));

console.log(sum_array([0, 4, 8, 12]));
