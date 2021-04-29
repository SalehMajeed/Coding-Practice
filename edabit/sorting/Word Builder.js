function word_builder(letters, positions) {
	const str = [];
	for (let i = 0; i < letters.length; i++) {
		str[positions[i]] = letters[i];
	}
	return str.join('');
}

console.log(word_builder(['e', 't', 's', 't'], [1, 3, 2, 0]));
console.log(word_builder(['b', 'e', 't', 'i', 'd', 'a'], [3, 0, 5, 4, 1, 2]));
console.log(word_builder(['g', 'e', 'o'], [1, 0, 2]));
