function count_uppercase(str) {
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		str[i].split('').filter(val => {
			if (val === val.toUpperCase()) {
				sum++;
			}
		});
	}
	return sum;
}

console.log(count_uppercase(['SOLO', 'hello', 'Tea', 'wHat']));
console.log(count_uppercase(['little', 'lower', 'down']));
console.log(count_uppercase(['EDAbit', 'Educate', 'Coding']));
