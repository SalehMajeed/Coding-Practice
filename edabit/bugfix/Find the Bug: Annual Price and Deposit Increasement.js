function migrate_product(oldProduct) {
	const newProduct = { ...oldProduct };
	newProduct.price *= 1.15;
	newProduct.containers = [...newProduct.containers].map(container => {
		const cnt = { ...container };
		if (cnt.type === 'bottle') {
			cnt.deposit = 0.2;
		}
		return cnt;
	});

	return { oldProduct, newProduct };
}

console.log(
	migrate_product({
		product: 'Milk',
		price: 1.2,
		containers: [
			{ type: 'bottle', deposit: 0.15, liters: 1.5 },
			{ type: 'can', deposit: 0.1, liters: 0.33 },
			{ type: 'carton', deposit: null, liters: 1 },
		],
	})
);
