function integer_boolean(str) {
	return str.split('').map(val => val != 0);
}
console.log(integer_boolean('100101'));
console.log(integer_boolean('10'));
console.log(integer_boolean('001'));
