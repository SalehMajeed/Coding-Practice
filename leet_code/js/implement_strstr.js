function haystack(haystack, needle) {
	return haystack.indexOf(needle);
}

console.log(haystack('hello', 'll'));
console.log(haystack('aaaaa', 'bba'));
console.log(haystack('', ''));
