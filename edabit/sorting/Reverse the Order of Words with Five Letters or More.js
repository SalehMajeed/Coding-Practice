function reverse(str) {
	return str
		.split(' ')
		.map(val => {
			if (val.length >= 5) {
				return val.split('').reverse().join('');
			} else {
				return val;
			}
		})
		.join(' ');
}

console.log(reverse('Reverse'));
console.log(reverse('This is a typical sentence.'));
console.log(reverse('The dog is big.'));
