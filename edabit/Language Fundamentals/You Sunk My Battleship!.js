function fire(matrix, coordinates) {
	const map = {};
	const length = matrix.length;
	let initial_str = `A1`;

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			initial_str = String.fromCharCode(initial_str.charCodeAt(0) + i) + `${j + 1}`;
			map[initial_str] = matrix[i][j];
		}
	}
	return map[coordinates] == '.' ? 'splash' : 'BOOM';
}

console.log(
	fire(
		[
			['.', '.', '.', '*', '*'],
			['.', '*', '.', '.', '.'],
			['.', '*', '.', '.', '.'],
			['.', '*', '.', '.', '.'],
			['.', '.', '*', '*', '.'],
		],
		'A1'
	),
	'splash',
	'A1: target first nested array, first element'
);

console.log(
	fire(
		[
			['.', '.', '.', '*', '*'],
			['.', '*', '.', '.', '.'],
			['.', '*', '.', '.', '.'],
			['.', '*', '.', '.', '.'],
			['.', '.', '*', '*', '.'],
		],
		'C2'
	),
	'BOOM',
	'C2: target third nested array, second element'
);

console.log(
	fire(
		[
			['.', '.'],
			['*', '*'],
		],
		'B1'
	),
	'BOOM'
);

console.log(
	fire(
		[
			['.', '.'],
			['*', '*'],
		],
		'A2'
	),
	'splash'
);

console.log(
	fire(
		[
			['*', '.', '.'],
			['.', '.', '.'],
			['.', '*', '*'],
		],
		'C3'
	),
	'BOOM'
);

console.log(
	fire(
		[
			['*', '.', '.'],
			['.', '.', '.'],
			['.', '*', '*'],
		],
		'A3'
	),
	'splash'
);

console.log(
	fire(
		[
			['.', '.', '.', '.'],
			['.', '*', '*', '.'],
			['.', '.', '.', '.'],
			['.', '.', '.', '.'],
		],
		'B3'
	),
	'BOOM'
);

console.log(
	fire(
		[
			['.', '.', '.', '.'],
			['.', '*', '*', '.'],
			['.', '.', '.', '.'],
			['.', '.', '.', '.'],
		],
		'B4'
	),
	'splash'
);

console.log(fire([['*']], 'A1'), 'BOOM');
