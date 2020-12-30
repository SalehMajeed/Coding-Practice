// RegEx: Character Classes XI ⁠- \S
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// Write a regex that will return true if the bio does not have any spaces before the last ending punctuation ?. You must use the \S character class in your expression.
// "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts?"
// The bio above is in the correct format. Therefore your RegEx should return true for it.
// Notes
// To search for the character ? in RegEx, the pattern must include \?.
function match(str) {
	return !/(\S ,)|(\S \.)|(\S \?)/g.test(str);
	//     /\S\?$/
	// OR
	// /\S[?.]$/g
	// OR
	// /\S(?=\?)/g
}

// console.log(
// 	match(
// 		'Can read a spray. chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts?'
// 	)
// );

// Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
// When "x" and "o" are not in the string, return true.
// Examples
// XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true
// // Case insensitive.
// XO("zpzpzpp") ➞ true
// // Returns true if no x and o.
// XO("zzoo") ➞ false
// Notes
// Remember to return true if there aren't any x's or o's.
// Must be case insensitive.

function XO(str) {
	const x = (str.match(/x/gi) || []).length;
	const o = (str.match(/o/gi) || []).length;
	return x == o;
}

// console.log(XO('ooxx'));
// console.log(XO('xooxx'));
// console.log(XO('ooxXm'));
// console.log(XO('zpzpzpp'));
// console.log(XO('zzoo'));

// Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"
// replaceVowel("chembur") ➞ "ch2mb5r"
// replaceVowel("khandbari") ➞ "kh1ndb1r3"
// Notes
// The input will always be in lowercase.

function replaceVowel(str) {
	return str.replace(/[aeiou]/g, (v) => 'aeiou'.indexOf(v) + 1);
	// return str.replace(/([aeiou])/g, (group1, g) => {
	// 	let obj = {
	// 		a: 1,
	// 		e: 2,
	// 		i: 3,
	// 		o: 4,
	// 		u: 5,
	// 	};
	// 	return obj[g];
	// });
}

console.log(replaceVowel('karachi'));
console.log(replaceVowel('chembur'));
console.log(replaceVowel('khandbari'));
