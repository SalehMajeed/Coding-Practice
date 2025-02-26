// Write a function that takes an Array of numbers and an integer 'k' as input. And returns the 'k' most frequent numbers (sorted by the decreasing order of their frequency)

function getKMostFreq(arr, num) {
	let obj = {};
	for (let i = 0; i < arr.length - 1; i++) {
		obj[arr[i]]++ || (obj[arr[i]] = 1);
	}
	return obj;
}

console.log(
	getKMostFreq(
		[5, 5, 8, 8, 8, 5, 5, 5, 5, 5, 4, 4, 4, 4, 9, 9, 5, 9, 9, 9, 9, 9, 9, 9, 5, 5, 7, 5, 5, 5, 9, 9, 9, 6, 7, 8],
		3
	)
);
