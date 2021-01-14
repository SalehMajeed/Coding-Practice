function length(str) {
	if (str.length <= 1) return str.length;
	return 1 + length(str.substring(1));
}
console.log(length('apple'));
console.log(length('make'));
console.log(length('a'));
console.log(length(''));
