function mumbling(str) {
	str = str.toLowerCase();
	const res = [];
	for (let i = 0; i < str.length; i++) {
		res.push(
			Array(i + 1)
				.fill(str[i])
				.join('')
		);
		let upper_case = [...res[i]];
		upper_case[0] = upper_case[0].toUpperCase();
		res[i] = upper_case.join('');
	}
	return res.join(',').replace(/,/g, '-');
}

console.log(mumbling('MubAshIr'));
console.log(mumbling('maTT'));
console.log(mumbling('EdaBit'));
