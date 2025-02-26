function remove_numbers(str) {
	return str
		.split('')
		.filter(c => isNaN(c))
		.join('');
}

console.log(remove_numbers('mubashir1'));
console.log(remove_numbers('12ma23tt'));
console.log(remove_numbers('e1d2a3b4i5t6'));
