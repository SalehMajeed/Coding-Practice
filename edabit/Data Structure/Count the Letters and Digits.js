function count_all(str) {
	str = str.replace(' ', '');
	const obj = {
		LETTERS: 0,
		DIGITS: 0,
	};
	for (const character of str) {
		if (isNaN(+character) == true) {
			obj.LETTERS++;
		} else {
			obj.DIGITS++;
		}
	}
	return obj;
}

console.log(count_all('Hello World'));
console.log(count_all('H3ll0 Wor1d'));
console.log(count_all('149990'));
