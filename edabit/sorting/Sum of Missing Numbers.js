function sumMissingNumbers(arr) {
	arr.sort((a, b) => (a > b ? 1 : -1));
	let num = 0;
	for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
		if (!arr.includes(i)) {
			num += i;
		}
	}
	return num;
}

console.log(sumMissingNumbers([1, 3, 5, 7, 10]));
console.log(sumMissingNumbers([10, 7, 5, 3, 1]));
console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));
