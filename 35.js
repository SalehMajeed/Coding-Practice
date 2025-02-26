// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
// Create a function that takes a string and returns a string.
// Examples
// toScottishScreaming("hello world") ➞ "HELLE WERLD"
// toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"
// toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"
// Notes
// Make sure to include all punctuation that is in the original string.
// You don't need any more namespaces than are already given.

// function toScottishScreaming(string) {
// 	return string.replace(/[aeiou]/g, 'e').toUpperCase();
// }

// console.log(toScottishScreaming('hello world'));
// console.log(toScottishScreaming('Mr. Fox was very naughty'));
// console.log(toScottishScreaming('Butterflies are beautiful!'));

// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden message in this string:
// const str = "242Edabit23 45can344 3be3 254324addictive!"
// Write the regular expression that reveals the hidden message. You have to remove all of the numbers to reveal the message. Use the character class \D in your expression.

// function remove_number(string) {
// 	// return string.replace(/\d/g, '');
// 	return string.match(/\D/g).join('');
// }

// const str = '242Edabit23 45can344 3be3 254324addictive!';
// console.log(remove_number(str));

// In this challenge, you are tasked to return the syllables of a word in an array. To find a syllables, if one consonant follows a vowel, divide the word between the vowel and the consonant. if two consonants follow a vowel, divide the word between the two consonants. However, when the last letter is "e", if the letter before it is a consonant, it would become a silent letter and would therefore be added to the syllable before instead of being its own syllable.
// Examples
// syllable("happy") ➞ ["hap" ,  py"]
// syllable("motel") ➞ ["mo" , "tel"]
// syllable("pancake") ➞ ["pan" , "cake"]
// syllable("dogumaru") ➞ ["do" , "gu" , "ma" , "ru"]
// syllable("abbufhafa") ➞ ["ab" , "buf" , "ha" , "fa"]
// Notes
// Vowels are a, e, i, o, u and y.
// There will only be a maximun of 2 consonants in a row and one vowel in a row.
// ab;
// buf;
// hafa;

function syllable(string) {
	let val = string
		.replace(/([^aeiouy])([^aeiouy])/g, '$1##$2')
		.split('##')
		.map(element => {
			let val = [];
			if (element.length >= 5) {
				val.push(
					...element.match(
						/([aeiouy][^aeiouy])|([^aeiouy][aeiouy])|([^aeiouy][aeiouy][^aeiouy]?)|([a-z]{1})/g
					)
				);
			} else {
				val.push(element);
			}
			return val.join(',');
		});
	return val;
}

console.log(syllable('motel'));
console.log(syllable('pancake'));
console.log(syllable('dogumaru'));
console.log(syllable('abbufhafa'));
