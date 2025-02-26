function uncensor(str, cor_str) {
	let index = 0;
	return str
		.split('')
		.map(val => {
			if (val == '*') {
				val = cor_str[index];
				index++;
			}
			return val;
		})
		.join('');
}
console.log(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'), 'Where did my vowels go?');
console.log(uncensor('abcd', ''), 'abcd', 'Works with no vowels.');
console.log(uncensor('*PP*RC*S*', 'UEAE'), 'UPPERCASE', 'Works with uppercase');
console.log(uncensor('Ch**s*, Gr*mm*t -- ch**s*', 'eeeoieee'), 'Cheese, Grommit -- cheese', 'Works with * at the end');
console.log(uncensor('*l*ph*nt', 'Eea'), 'Elephant', 'Works with * at the start');
