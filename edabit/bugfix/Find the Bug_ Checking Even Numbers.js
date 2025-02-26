function check_all_even(arr) {
	return arr.every(x => x % 2 == 0);
}

console.log(check_all_even([1, 2, 3, 4]));
console.log(check_all_even([2, 4, 6]));
console.log(check_all_even([5, 6, 8, 10]));
console.log(check_all_even([-2, 2, -2, 2]));
