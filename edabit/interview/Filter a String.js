function filter_string(txt) {
	const obj = {
		uppercase: 0,
		lowercase: 0,
		numbers: 0,
		special: 0,
	};

	for (let i = 0; i < txt.length; i++) {
		if (/[a-z]/g.test(txt[i])) {
			obj.lowercase++;
		} else if (/[A-Z]/g.test(txt[i])) {
			obj.uppercase++;
		} else if (/[0-9]/g.test(txt[i])) {
			obj.numbers++;
		} else {
			obj.special++;
		}
	}
	return Object.values(obj);
}

console.log(filter_string('*$(#Mu12bas43hiR%@*!'));
console.log(filter_string('^^Edabit^^%$#12379'));
console.log(filter_string('**Airforce1**'));
