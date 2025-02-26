function shared_letters(str1, str2) {
	let common = 0;
	for (const letter of str1) {
		if (str2.includes(letter)) {
			common++;
		}
	}
	return common;
}

console.log(shared_letters('apple', 'meaty'));
console.log(shared_letters('fan', 'forsook'));
console.log(shared_letters('spout', 'shout'));
