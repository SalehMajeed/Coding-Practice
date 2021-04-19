function sort_word(word) {
	return word
		.split('')
		.sort((a, b) => (a > b ? 1 : -1))
		.join('');
}

console.log(sort_word('dcba'));
console.log(sort_word('Unpredictable'));
console.log(sort_word('pneumonoultramicroscopicsilicovolcanoconiosis'));
