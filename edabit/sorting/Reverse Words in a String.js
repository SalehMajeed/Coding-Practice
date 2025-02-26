function reverse_words(string) {
	return string.trim().split(' ').reverse().join(' ');
}

console.log(reverse_words(' the sky is blue'));
console.log(reverse_words('hello   world!  '));
console.log(reverse_words('a good example'));
