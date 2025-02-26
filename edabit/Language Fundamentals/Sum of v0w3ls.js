function sumOfVowels(str) {
	const obj = {
		a: 4,
		e: 3,
		i: 1,
	};
	return (str.toLowerCase().match(/[aei]/g) || []).reduce((acc, val) => (acc += obj[val]), 0);
}

console.log(sumOfVowels("Let's test this function."), 8, '"Let\'s test this function."\n');
console.log(sumOfVowels('Do I get the correct output?'), 10, '"Do I get the correct output?"\n');
console.log(sumOfVowels('I love edabit!'), 12, '"I love edabit!"\n');
console.log(
	sumOfVowels("Will you still need me, will you still feed me when I'm 64?"),
	26,
	'"Will you still need me, will you still feed me when I\'m 64?"\n'
);
console.log(
	sumOfVowels('The greatest glory in living lies not in never falling, but in rising every time we fall.'),
	52,
	'"The greatest glory in living lies not in never falling, but in rising every time we fall."\n'
);
