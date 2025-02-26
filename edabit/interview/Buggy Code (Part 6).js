function removeNumbers(str) {
	return str
		.split('')
		.filter(c => !parseInt(c))
		.join('');
}

console.log(removeNumbers('mubashir1'));
console.log(removeNumbers('12ma23tt'));
console.log(removeNumbers('e1d2a3b4i5t6'));
