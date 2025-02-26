function firstNonRepeatedCharacter(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
			return str[i];
		}
	}
	return false;
}

console.log(firstNonRepeatedCharacter('the quick brown fox jumps then quickly blows air'), 'f');
console.log(firstNonRepeatedCharacter('the misty examination pleases into the drab county'), 'x');
console.log(firstNonRepeatedCharacter('hheelloo'), false, 'Return false when every character repeats.');
console.log(firstNonRepeatedCharacter('it was then the darling top met the whispering wing'), 'd');
console.log(firstNonRepeatedCharacter(''), false, 'An empty string should return false.');
console.log(firstNonRepeatedCharacter('it was then the frothy word met the round night'), 'a');
console.log(firstNonRepeatedCharacter('is the remind zone better than the section'), 'm');
console.log(firstNonRepeatedCharacter('b'), 'b');
console.log(firstNonRepeatedCharacter('what if the brainy boss ate the afternoon'), 'w');
console.log(firstNonRepeatedCharacter('the sympathetic mixture rejects into the leafy objective'), 'p');
