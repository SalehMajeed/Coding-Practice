function larget_common_prefix(strs) {
	const word = strs.pop();
	const count = [];
	for (let i = 0; i < strs.length; i++) {
		let counts = 0;
		for (let j = 0; j < word.length; j++) {
			if (strs[i][j] == (word[j])) {
				counts++;
			} else {
				break;
			}
		}
		count.push(counts);
	}
	return word.substring(0, Math.min(...count));
}
console.log(larget_common_prefix(['flower', 'flow', 'flight']));
console.log(larget_common_prefix(['dog', 'racecar', 'car']));
console.log(larget_common_prefix(['']));
console.log(larget_common_prefix(['a']));
console.log(larget_common_prefix(['ab', 'a']));
console.log(larget_common_prefix(['cir', 'car']));
console.log(larget_common_prefix(['flower', 'flower', 'flower', 'flower']));
console.log(larget_common_prefix(['reflower', 'flow', 'flight']));
console.log(larget_common_prefix(['aa', 'aa']));
