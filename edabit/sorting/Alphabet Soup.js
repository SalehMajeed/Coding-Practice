function alphabet_soup(str) {
	return str
		.split('')
		.sort((a, b) => (a > b ? 1 : -1))
		.join('');
}

console.log(alphabet_soup('hello'));
console.log(alphabet_soup('edabit'));
console.log(alphabet_soup('hacker'));
console.log(alphabet_soup('geek'));
console.log(alphabet_soup('javascript'));
