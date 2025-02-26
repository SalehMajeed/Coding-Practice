function is_anagram(s1, s2) {
	return s1.toLowerCase().split('').sort().join('') == s2.toLowerCase().split('').sort().join('');
}

console.log(is_anagram('cristian', 'Cristina'));
console.log(is_anagram('Dave Barry', 'Ray Adverb'));
console.log(is_anagram('Nope', 'Note'));
