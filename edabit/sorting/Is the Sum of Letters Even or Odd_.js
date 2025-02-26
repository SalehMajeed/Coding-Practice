function is_alpha(word) {
	const str = word.replace(/[^A-Z0-9]/gi, '').toUpperCase();
	return str.split('').reduce((acc, val, index) => (acc = acc + str.charCodeAt(index) - 64), 0) % 2 == 0
		? true
		: false;
}

console.log(is_alpha("i'am king"));
console.log(is_alpha('True'));
console.log(is_alpha('alexa'));
