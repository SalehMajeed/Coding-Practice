function calculateSum(txt) {
	return txt.split('').reduce((acc, ch, index) => (acc += txt.charCodeAt(index)), 0);
}

function reverseString(txt) {
	return txt.split('').reduce((acc, ch) => {
		return ch + acc;
	});
}

console.log(calculateSum('lime'));
console.log(calculateSum('a'));
console.log(reverseString('hello'));
