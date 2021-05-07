function even_ddd_string(txt) {
	let left = '';
	let right = '';
	for (let i = 0; i < txt.length; i++) {
		if (i % 2 == 0) {
			left += txt[i];
		} else {
			right += txt[i];
		}
	}
	return `${left} ${right}`;
}

console.log(even_ddd_string('mubashir'));
console.log(even_ddd_string('edabit'));
console.log(even_ddd_string('airforce'));
