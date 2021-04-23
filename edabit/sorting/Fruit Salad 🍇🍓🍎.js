function fruit_salad(arr) {
	return arr
		.flatMap(val => [val.slice(0, val.length / 2), val.slice(val.length / 2)])
		.sort((a, b) => (a > b ? 1 : -1))
		.join('');
}

console.log(fruit_salad(['apple', 'pear', 'grapes']));
console.log(fruit_salad(['raspberries', 'mango']));
console.log(fruit_salad(['banana']));
