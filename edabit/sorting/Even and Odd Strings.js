function even_odd_string(txt) {
	let even = '';
	let odd = '';
	for (let i = 0; i < txt.length; i++) {
		if (i % 2 == 0) {
			even += txt[i];
		} else {
			odd += txt[i];
		}
	}
	return even + ' ' + odd;
}

console.log(even_odd_string('mubashir'));
console.log(even_odd_string('edabit'));
console.log(even_odd_string('airforce'));
