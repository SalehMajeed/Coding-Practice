function longest_string(str1, str2) {
	return Array.from(new Set(str1 + str2))
		.sort((a, b) => (a > b ? 1 : -1))
		.join('');
}

str1 = 'mubashir';
str2 = 'edabit';

console.log(longest_string(str1, str2));
str1 = 'abcdefghijklmnopqrstuvwxyz';
str2 = 'abcdefghijklmnopqrstuvwxyz';

console.log(longest_string(str1, str2));
