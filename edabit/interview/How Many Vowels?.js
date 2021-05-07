function count_vowels(str) {
	return str.match(/a|e|i|o|u/gi).length;
}

console.log(count_vowels('Celebration'));
console.log(count_vowels('Palm'));
console.log(count_vowels('Prediction'));
