function ohmsLaw(v = null, r = null, i = null) {
	if ((v == '' && r == '') || (v == '' && i == '') || (r == '' && i == '') || (r != '' && v != '' && i != '')) {
		return 'Invalid';
	} else if (v == '') {
		return (r * i).toFixed(2);
	} else if (r == '') {
		return (v / i).toFixed(2);
	} else if (i == '') {
		return (v / r).toFixed(2);
	}
}

console.log(ohmsLaw(12, 220, ''), 0.05);
console.log(ohmsLaw(230, '', 2), 115);
console.log(ohmsLaw('', 220, 0.02), 4.4);
console.log(ohmsLaw('', '', 10), 'Invalid');
console.log(ohmsLaw(500, 50, 10), 'Invalid');
console.log(ohmsLaw(12, '', ''), 'Invalid');
