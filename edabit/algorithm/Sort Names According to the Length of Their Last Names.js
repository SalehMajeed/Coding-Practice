function lastNameLensort(arr) {
	return arr.sort((a, b) => a.split(' ')[1].length > b.split(' ')[1].length);
}

console.log(
	lastNameLensort(['Jennifer Figueroa', 'Heather Mcgee', 'Amanda Schwartz', 'Nicole Yoder', 'Melissa Hoffman']),
	['Heather Mcgee', 'Nicole Yoder', 'Melissa Hoffman', 'Jennifer Figueroa', 'Amanda Schwartz']
);
console.log(
	lastNameLensort(['Hitagi Senjougahara', 'Edward Elric', 'Light Yagami', 'Rintaro Okabe', 'Kurisu Makise']),
	['Edward Elric', 'Rintaro Okabe', 'Kurisu Makise', 'Light Yagami', 'Hitagi Senjougahara']
);
