function duplicateCount(str) {
	let res = 0;
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] == str[j] && typeof obj[str[i]] == 'undefined') {
				res += 1;
				obj[str[i]] = 1;
			}
		}
	}
	return res;
}

console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('Aa'), 0, 'Duplicate characters are case sensitive.');
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabbcdeB'), 2);
console.log(duplicateCount('indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2);
console.log(duplicateCount('aa1112'), 2);
console.log(duplicateCount('bb2c'), 1);
