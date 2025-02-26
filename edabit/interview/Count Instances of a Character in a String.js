function char_count(myChar, str) {
	const regex = new RegExp(myChar, 'g');
	return str.match(regex).length;
}

console.log(char_count('a', 'edabit'));
console.log(char_count('c', 'Chamber of secrets'));
console.log(char_count('b', 'big fat bubble'));
