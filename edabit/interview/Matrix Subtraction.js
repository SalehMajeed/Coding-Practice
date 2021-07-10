function sub(A1, A2) {
	const res = [];
	for (let i = 0; i < A1.length; i++) {
		res[i] = new Array(A1[i].length);
		for (let j = 0; j < A1[i].length; j++) {
			res[i][j] = A1[i][j] - A2[i][j];
		}
	}
	return res;
}

console.log(
	sub(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]
	)
);
console.log(
	sub(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]
	),
	[
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]
);
console.log(
	sub(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 10],
		]
	),
	[
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, -1],
	]
);
console.log(
	sub(
		[
			[1, 2],
			[4, 5],
		],
		[
			[1, 2],
			[4, 5],
		]
	),
	[
		[0, 0],
		[0, 0],
	]
);
console.log(
	sub(
		[
			[1, 2],
			[4, -5],
		],
		[
			[2, 2],
			[4, -5],
		]
	),
	[
		[-1, 0],
		[0, 0],
	]
);
console.log(sub([[21]], [[63]]), [[-42]]);
console.log(
	sub(
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		]
	),
	[
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]
);
console.log(
	sub(
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0.678],
		]
	),
	[
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, -0.678],
	]
);
console.log(
	sub(
		[
			['2', 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			['3', 0, 0],
			[0, 0, 0],
			[0, 0, 0.678],
		]
	),
	[
		[-1, 0, 0],
		[0, 0, 0],
		[0, 0, -0.678],
	]
);