// 180 ==>	Digitaldrome
// 	In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending). Given an integer n, implement a function that returns a string:
// 		"Metadrome" if the digits of n form an ascending sequence without repeating digits.
// 		"Plaindrome" if the digits of n form an ascending sequence with repeating digits.
// 		"Katadrome" if the digits of n form a descending sequence without repeating digits.
// 		"Nialpdrome" if the digits of n form a descending sequence with repeating digits.
// 		"Repdrome" if n contains a single repeating digit.
// 		"Nondrome" if none of the above conditions is true.
// 		digitaldrome(1357) ➞ "Metadrome" // Ascending sequence without repeating digits
// 		digitaldrome(12344) ➞ "Plaindrome" // Ascending sequence with repeating digits
// 		digitaldrome(7531) ➞ "Katadrome" // Descending sequence without repeating digits
// 		digitaldrome(9874441) ➞ "Nialpdrome" // Descending sequence with  repeating digits
// 		digitaldrome(666) ➞ "Repdrome" // There's only a single repeating digit
// 		digitaldrome(1985) ➞ "Nondrome" // This is not a sequence
function digitaldrome(numbers) {
    let array = String(numbers).split("")
    return (new Set(array).size == 1) ? "Repdrome" :
        (array.sort((a, b) => a - b).join("") == numbers) ? (array.length == new Set(array).size ? "Metadrome" : "Plaindrome") :
            (array.sort((a, b) => b - a).join("") == numbers) ? (array.length == new Set(array).size ? "Katadrome" : "Nialpdrome") : "Nondrome"
}
console.log(digitaldrome(1357))
console.log(digitaldrome(12344))
console.log(digitaldrome(7531))
console.log(digitaldrome(9874441))
console.log(digitaldrome(666))
console.log(digitaldrome(1985))

// 181 ==>	Stranger Strings
// 	In this challenge, every given string is made of three types of characters: blank spaces, digits, and strangers.
// 	The Digits ➞ 0 1 2 3 4 5 6 7 8 9
// 	The Strangers ➞ 𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡
// 	The goal is to remove the spaces, to separate the digits from the strangers, and to apply another transform in the two separated groups without using the .replace() string method.
// 	Given a string str, implement a function that returns an array containing two values, in the order:
// 		An integer being the sum of all digits. If the given string has no digits, the sum will be equal to zero.
// 		A string containing the strangers, sorted in decrescent order. If the given string has no strangers, the returned string will be an empty one.
// 	Try doing this without using String.replace()
// 		strangerStrings("𝟚2 𝟛3 𝟘0 𝟙1") ➞ [ 6, "𝟛𝟚𝟙𝟘" ]
// 		strangerStrings("𝟝 𝟚003   9") ➞ [ 12, "𝟝𝟚" ]
// 		strangerStrings("32   000𝟜0 0 00𝟙𝟟") ➞ [ 5, "𝟟𝟜𝟙" ]
// 	All given strings are valid, containing only the set of characters specified in the instructions: don't worry about validation handling.
function strangerStrings(string) {
    let digit = 0, strangers = []
    for (let i = 0; i < string.length; i++) {
        if (!Number(string[i]) && string[i] != 0) {
            strangers.push(string[i])
            console.log(string[i])
        } else if (string[i] != " ") {
            digit += +string[i]
        }
    }
    // return [digit, strangers.sort((a,b) => a < b?1:-1).join("")]
}
console.log(strangerStrings("𝟚2 𝟛3 𝟘0 𝟙1"))
console.log(strangerStrings("𝟝 𝟚003   9"))
console.log(strangerStrings("32   000𝟜0 0 00𝟙𝟟"))

// const strangerStrings = s => {
//     const num = s.match(/[\d]/g),
//         sym = [...s].sort().reverse().join('').split(/[\d]/g)[0],
//         red = num ? num.reduce((a, v) => +a + +v, 0) : 0;
//     return [red, sym];
// };