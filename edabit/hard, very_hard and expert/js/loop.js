// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// console.log(// sevenBoom([1, 2, 3, 4, 5, 6, 7]) )
// // 7 conains the number seven.
// console.log(// sevenBoom([8, 6, 33, 100]) )
// // None f the items contain 7 within them.
// console.log(// sevenBoom([2, 55, 60, 97, 86]) )
// // 97 cotains the number seven.

function sevenBoom(arr) {
	return /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
}
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));

// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.
function countBoomerangs(arr) {
	let boomerang = 0;
	for (let i = 1; i < arr.length - 1; i++) {
		if ((arr[i - 1] == arr[i + 1]) & (arr[i - 1] != arr[i])) boomerang++;
	}
	return boomerang;
}
// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));

// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]
function numInStr(arr) {
	return arr.filter(val => val.search(/[1-9]/g) != -1);
}
// console.log(numInStr(['1a', 'a', '2b', 'b']));
// console.log(numInStr(['abc', 'abc10']));
// console.log(numInStr(['abc', 'ab10c', 'a10bc', 'bcd']));
// console.log(numInStr(['this is a test', 'test1']));

// Given a string, reverse all the words which have odd length. The even length words are not changed.
function reverseOdd(str) {
	return str
		.split(' ')
		.map(val => (val.length % 2 == 1 ? [...val].reverse().join('') : val))
		.join(' ');
}
// console.log(reverseOdd('Bananas'));
// console.log(reverseOdd('One two three four'));
// console.log(reverseOdd('Make sure uoy only esrever sdrow of ddo length'));

// Abigail and Benson are playing Rock, Paper, Scissors.
// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".
// R stands for Rock
// P stands for Paper
// S stands for Scissors
function calculateScore(arr) {
	let Abigail = 0;
    let Benson = 0;
    let macth = 0
    arr.map(val => {
        macth++
		if ((val[0] == 'R' && val[1] == 'P') || (val[0] == 'S' && val[1] == 'R')) {
			Benson++;
		} else if (val[0] == val[1]) {
		} else {
			Abigail++;
		}
    });
    if (Abigail == Benson) {
        return 'Tie'
    } else if (Abigail > Benson) {
        return `Abigail`
    }else{
		return `Benson`;
	}
}
console.log(
	calculateScore([
		['R', 'P'],
		['R', 'S'],
		['S', 'P'],
	])
);
// console.log(
// 	calculateScore([
// 		['R', 'R'],
// 		['S', 'S'],
// 	])
// );
// console.log(
// 	calculateScore([
// 		['S', 'R'],
// 		['R', 'S'],
// 		['R', 'R'],
// 	])
// );