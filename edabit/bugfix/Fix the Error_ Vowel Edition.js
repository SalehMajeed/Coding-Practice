function remove_vowels(str) {
	return str.replace(/[aeiou]/g, '');
}

console.log(remove_vowels('candy'));
console.log(remove_vowels('hello'));
console.log(remove_vowels('apple'));
