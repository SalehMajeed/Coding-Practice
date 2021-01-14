function rotateMaxNumber(number) {
	return [...String(number)].sort((a, b) => b - a).join('');
}
console.log(rotateMaxNumber(123));
console.log(rotateMaxNumber('001'));
console.log(rotateMaxNumber(999));
