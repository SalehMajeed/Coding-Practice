function sort_descending(num) {
	return +String(num)
		.split('')
		.sort((a, b) => (a > b ? -1 : 1))
		.join('');
}

console.log(sort_descending(123));
console.log(sort_descending(1254859723));
console.log(sort_descending(73065));
