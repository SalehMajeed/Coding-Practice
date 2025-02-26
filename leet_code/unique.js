function singleNumber(arr) {
	for (let i = 0; i < arr.length; i++) {
		let isDuplicate = false;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j] && i != j) {
				isDuplicate = true;
				break;
			}
		}
		if (isDuplicate == false) {
			return arr[i];
		}
	}
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([4, 4, 1, 2, 1, 2, 3]));
console.log(singleNumber([1]));
