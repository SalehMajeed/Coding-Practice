function number_len_sort(arr) {
	return arr.sort((a, b) => (String(a).length > String(b).length ? 1 : -1));
}

console.log(number_len_sort([1, 54, 1, 2, 463, 2]));
console.log(number_len_sort([999, 421, 22, 990, 32]));
console.log(number_len_sort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]));
