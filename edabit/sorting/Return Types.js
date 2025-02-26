function array_values_types(arr) {
	return arr.map(val => typeof val);
}

console.log(array_values_types([1, 2, 'null', []]));
console.log(array_values_types(['214', true, false, 2, 2.15, [], null]));
console.log(array_values_types([21.1, 'float', 'array', ['I am array'], null, true, 214]));
