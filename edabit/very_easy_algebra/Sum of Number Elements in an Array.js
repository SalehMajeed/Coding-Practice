function number_sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'number') {
			sum += arr[i];
		}
	}
	return sum;
}

console.log(number_sum([1, 2, '13', '4', '645']));
console.log(number_sum([true, false, '123', '75']));
console.log(number_sum([1, 2, 3, 4, 5, true]));
