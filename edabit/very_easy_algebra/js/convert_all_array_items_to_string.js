function parseArray(arr) {
	return arr.length == 0 ? arr : arr.join(',').split(',');
}
console.log(parseArray([1, 2, 'a', 'b']));
console.log(parseArray(['abc', 123, 'def', 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, 'a', '123b']));
console.log(parseArray([]));
