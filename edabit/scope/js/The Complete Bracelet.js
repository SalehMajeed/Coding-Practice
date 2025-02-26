function completeBracelet(arr) {
	if (arr.length % 2 == 1) {
		return false;
	}
	for (let i = 0; i < arr.length / 2; i++) {
		for (let j = arr.length / 2; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				i++;
				continue;
			} else {
				return false;
			}
		}
	}
	return true;
}

// console.log(completeBracelet([1, 2, 2, 1, 2, 2]), true);
// console.log(completeBracelet([5, 1, 2, 2]), false);
// console.log(completeBracelet([5, 5, 5]), false);
// console.log(completeBracelet([5, 5, 7, 7]), false);
// console.log(completeBracelet([5, 5, 7, 7, 5, 5, 7, 7]), true);
console.log(completeBracelet([1, 2, 1, 2, 1, 2]), true);
console.log(completeBracelet([1, 2, 2, 2, 1, 2, 2]), false);
console.log(completeBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2]), true);
console.log(completeBracelet([5, 2, 5, 5, 2, 5, 2, 5, 2, 2, 5, 2, 5, 2, 5, 5, 2, 5, 2, 5, 2, 2, 5, 2]), true);
console.log(completeBracelet([1, 2, 3, 3, 1, 2, 3, 3]), true);
console.log(completeBracelet([1, 2, 1, 2, 1, 2, 1, 2]), true);
console.log(completeBracelet([1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7]), true);
console.log(completeBracelet([4, 4, 3, 4, 4, 4, 4, 3, 4, 4]), true);
console.log(completeBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1]), false);
console.log(completeBracelet([1, 1, 6, 1, 1, 7]), false);
console.log(completeBracelet([5, 5]), false);
