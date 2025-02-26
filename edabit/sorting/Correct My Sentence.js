function correct_sentences(str) {
	return (
		str
			.trim()
			.replace(/\s+/g, ' ')
			.replace(/\s([A-Z])/g, '. $1')
			.replace(/^[a-z]/, char => char.toUpperCase()) + '.'
	);
}

console.log(correct_sentences('  mubashir loves  edabit  Matt  loves  edabit  '));
console.log(correct_sentences('  he is an engineer He sleeps a lot'));
console.log(correct_sentences(' his english is not good Help him     Thank you'));
