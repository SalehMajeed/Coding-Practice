function group(arr, size) {
	const result = new Array(Math.ceil(arr.length / size));
	arr.forEach((element, index) => {
		if (typeof result[index % result.length] == 'undefined') {
			result[index % result.length] = [];
			result[index % result.length].push(element);
		} else {
			result[index % result.length].push(element);
		}
	});

	console.log(result);

	return result;
}

console.log(
	group([1, 2, 3, 4], 2) ==
		[
			[1, 3],
			[2, 4],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6, 7], 4) ==
		[
			[1, 3, 5, 7],
			[2, 4, 6],
		].join(',')
);
console.log(group([1, 2, 3, 4, 5], 1) == [[1], [2], [3], [4], [5]].join(','));
console.log(
	group([1, 2, 3, 4, 5, 6], 4) ==
		[
			[1, 3, 5],
			[2, 4, 6],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6], 3) ==
		[
			[1, 3, 5],
			[2, 4, 6],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6], 2) ==
		[
			[1, 4],
			[2, 5],
			[3, 6],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4) ==
		[
			[1, 4, 7, 10],
			[2, 5, 8, 11],
			[3, 6, 9],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6, 7, 8], 2) ==
		[
			[1, 5],
			[2, 6],
			[3, 7],
			[4, 8],
		].join(',')
);
