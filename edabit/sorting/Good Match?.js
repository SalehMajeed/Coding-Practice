function is_good_match(arr) {
	const result_arr = [];
	if (arr.length % 2 != 0) {
		return 'bad match';
	}
	for (let i = 0; i < arr.length; i++) {
		result_arr.push(arr[i] + arr[i + 1]);
		i++;
	}
	return result_arr;
}

console.log(is_good_match([1, 2, 4, 7]));
console.log(is_good_match([5, 7, 9, -1, 4, 2]));
console.log(is_good_match([5, 7, 9, -1, 4, 2, 3]));
console.log(is_good_match([2, 6, 7, -2, 4]));
