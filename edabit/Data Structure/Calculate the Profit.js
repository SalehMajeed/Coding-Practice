function profit(info) {
	return Math.round((info.sellPrice - info.costPrice) * info.inventory);
}

console.log(
	profit({
		costPrice: 32.67,
		sellPrice: 45.0,
		inventory: 1200,
	})
);

console.log(
	profit({
		costPrice: 225.89,
		sellPrice: 550.0,
		inventory: 100,
	})
);

console.log(
	profit({
		costPrice: 2.77,
		sellPrice: 7.95,
		inventory: 8500,
	})
);
