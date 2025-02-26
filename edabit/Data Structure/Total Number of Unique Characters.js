function coun_unique(s1, s2) {
	return new Set((s1 + s2).split('')).size;
}

console.log(coun_unique('apple', 'play'));
console.log(coun_unique('sore', 'zebra'));
console.log(coun_unique('a', 'soup'));
