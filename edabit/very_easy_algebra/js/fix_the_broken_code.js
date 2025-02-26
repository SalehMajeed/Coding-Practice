function sortWord(str) {
	return [...str].sort().join('');
}
console.log(sortWord('dcba'));
console.log(sortWord('Unpredictable'));
console.log(sortWord('pneumonoultramicroscopicsilicovolcanoconiosis'));
