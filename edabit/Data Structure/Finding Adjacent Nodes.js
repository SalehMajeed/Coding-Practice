function is_adjacent(matrix, node1, node2) {
	return matrix[node1][node2] == true;
}

console.log(
	is_adjacent(
		[
			[0, 1, 0, 0],
			[1, 0, 1, 1],
			[0, 1, 0, 1],
			[0, 1, 1, 0],
		],
		0,
		1
	)
);

console.log(
	is_adjacent(
		[
			[0, 1, 0, 0],
			[1, 0, 1, 1],
			[0, 1, 0, 1],
			[0, 1, 1, 0],
		],
		0,
		2
	)
);

console.log(
	is_adjacent(
		[
			[0, 1, 0, 1, 1],
			[1, 0, 1, 0, 0],
			[0, 1, 0, 1, 0],
			[1, 0, 1, 0, 1],
			[1, 0, 0, 1, 0],
		],
		0,
		3
	)
);

console.log(
	is_adjacent(
		[
			[0, 1, 0, 1, 1],
			[1, 0, 1, 0, 0],
			[0, 1, 0, 1, 0],
			[1, 0, 1, 0, 1],
			[1, 0, 0, 1, 0],
		],
		1,
		4
	)
);
