function total_sales(sales, product) {
	let sum = 0;
	let index = 0;

	if (!sales[0].includes(product)) {
		return 'Product not found';
	}

	index = sales[0].indexOf(product);

	for (let i = 1; i < sales.length; i++) {
		sum += sales[i][index];
	}

	return sum;
}
console.log(
	total_sales(
		[
			['A', 'B', 'C'],
			[2, 7, 1],
			[3, 6, 6],
			[4, 5, 5],
		],
		'A'
	)
);

console.log(
	total_sales(
		[
			['A', 'B', 'C'],
			[2, 7, 1],
			[3, 6, 6],
			[4, 5, 5],
		],
		'C'
	)
);

console.log(
	total_sales(
		[
			['A', 'B', 'C'],
			[2, 7, 1],
			[3, 6, 6],
			[4, 5, 5],
		],
		'D'
	)
);
