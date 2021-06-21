function group(arr, size) {
	let result = new Array(Math.ceil(arr.length / size));
	for (let i = 0; i < arr.length; i++) {
		if (typeof result[i % result.length] == 'undefined') {
			result[i % result.length] = [];
			result[i % result.length].push(arr[i]);
		} else {
			result[i % result.length].push(arr[i]);
		}
	}
	return result;
}
console.log(
	group([1, 2, 3, 4], 2),
	group([1, 2, 3, 4], 2).join(',') ==
		[
			[1, 3],
			[2, 4],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6, 7], 4),
	group([1, 2, 3, 4, 5, 6, 7], 4).join(',') ==
		[
			[1, 3, 5, 7],
			[2, 4, 6],
		].join(',')
);
console.log(group([1, 2, 3, 4, 5], 1), group([1, 2, 3, 4, 5], 1).join(',') == [[1], [2], [3], [4], [5]].join(','));
console.log(
	group([1, 2, 3, 4, 5, 6], 4),
	group([1, 2, 3, 4, 5, 6], 4).join(',') ==
		[
			[1, 3, 5],
			[2, 4, 6],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6], 3),
	group([1, 2, 3, 4, 5, 6], 3).join(',') ==
		[
			[1, 3, 5],
			[2, 4, 6],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6], 2),
	group([1, 2, 3, 4, 5, 6], 2).join(',') ==
		[
			[1, 4],
			[2, 5],
			[3, 6],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4),
	group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4).join(',') ==
		[
			[1, 4, 7, 10],
			[2, 5, 8, 11],
			[3, 6, 9],
		].join(',')
);
console.log(
	group([1, 2, 3, 4, 5, 6, 7, 8], 2),
	group([1, 2, 3, 4, 5, 6, 7, 8], 2).join(',') ==
		[
			[1, 5],
			[2, 6],
			[3, 7],
			[4, 8],
		].join(',')
);
