function check_equals(arr1, arr2) {
	if (arr1.join(' ') === arr2.join(' ')) {
		return true;
	} else {
		return false;
	}
}

console.log(check_equals([1, 2], [1, 3]));
console.log(check_equals([1, 2], [1, 2]));
console.log(check_equals([4, 5, 6], [4, 5, 6]));
console.log(check_equals([4, 7, 6], [4, 5, 6]));
console.log(check_equals([4, 7, 6], [4, 6, 7]));
