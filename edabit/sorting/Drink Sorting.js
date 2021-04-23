function sort_drink_by_price(drinks) {
	return drinks.sort((a, b) => (a.price > b.price ? 1 : -1));
}

const drinks = [
	{ name: 'lemonade', price: 50 },
	{ name: 'lime', price: 10 },
];
console.log(sort_drink_by_price(drinks));
