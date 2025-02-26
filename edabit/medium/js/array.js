console.log('question 1 ->');
// Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
	return arr.length == 0 ? 0 : arr.filter(val => val).length;
}
// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false]));
// console.log(countTrue([]));

console.log('question 2 ->');
function likeOrDislike(arr) {
	if (arr.length == 0) return 'Nothing';
	let message = 'Nothing';
	arr.forEach(val => {
		if (message != val) message = val;
		else message = 'Nothing';
	});
	return message;
}
console.log(likeOrDislike([]));
console.log(likeOrDislike(['Dislike']));
console.log(likeOrDislike(['Like', 'Like']));
console.log(likeOrDislike(['Dislike', 'Like']));
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike']));

console.log('question 3 ->');
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(obj) {
	if (Object.keys(obj).length == 0) return [];
	let res = [];
	for (const key in obj) {
		res.push([key, obj[key]]);
	}
	return res;
}
// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));

console.log('question 4 ->');
// Create a function that concatenates n input arrays, where n is variable.
function concat(...arr) {
	return arr.flat(Infinity);
}
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));
// console.log(concat([1], [2], [3], [4], [5], [6], [7]));
// console.log(concat([1, 2], [3, 4]));
// console.log(concat([4, 4, 4, 4, 4]));

console.log('question 5 ->');
function changeEnough(total_amount, due) {
	let divide = [0.25, 0.1, 0.05, 0.01];
	let result = 0;
	for (let i = 0; i < total_amount.length; i++) {
		result = result + total_amount[i] * divide[i];
	}
	return result >= due;
}
// console.log(changeEnough([2, 100, 0, 0], 14.11));
// console.log(changeEnough([0, 0, 20, 5], 0.75));
// console.log(changeEnough([30, 40, 20, 5], 12.55));
// console.log(changeEnough([10, 0, 0, 50], 3.85));
// console.log(changeEnough([1, 0, 5, 219], 19.99));

console.log('question 6 ->');
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
function arrayOfMultiples(num, length) {
	let result = [];
	let len = num * length;
	for (let i = num; i <= len; i += num) {
		result.push(i);
	}
	return result;
}
// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));

console.log('question 7 ->');
// Write a function that converts an object into an array of keys and values.
function objectToArray(obj) {
	let result = [];
	for (const key in obj) {
		result.push([key, obj[key]]);
	}
	return result;
}
// console.log(
// 	objectToArray({
// 		D: 1,
// 		B: 2,
// 		C: 3,
// 	})
// );
// console.log(
// 	objectToArray({
// 		likes: 2,
// 		dislikes: 3,
// 		followers: 10,
// 	})
// );

console.log('question 8 ->');
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
function ascDesNone(arr, order) {
	if (order == 'None') return arr;
	return arr.sort((a, b) => (order == 'Asc' ? a - b : b - a));
}
// console.log(ascDesNone([7, 8, 11, 66], 'Asc'));
// console.log(ascDesNone([4, 3, 2, 1], 'Asc'));
// console.log(ascDesNone([4, 2, 3, 1], 'Des'));
// console.log(ascDesNone([7, 8, 11, 66], 'Des'));
// console.log(ascDesNone([1, 2, 3, 4], 'None'));

console.log('question 9 ->');
// In this challenge you will be given an array similar to the following:
// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
function sortIt(array) {
	return array.sort((a, b) => a - b);
}
// console.log(sortIt([4, 1, 3]));
// console.log(sortIt([[4], [1], [3]]));
// console.log(sortIt([4, [1], 3]));
// console.log(sortIt([[4], 1, [3]]));
// console.log(sortIt([[3], 4, [2], [5], 1, 6]));

console.log('question 10 ->');
// Fix this incorrect code so that all tests pass!
function flatten(arr) {
	arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		arr2.push(...arr[i]);
	}
	return arr2;
}
// console.log(
// 	flatten([
// 		[1, 2],
// 		[3, 4],
// 	])
// );
// console.log(
// 	flatten([
// 		['a', 'b'],
// 		['c', 'd'],
// 	])
// );
// console.log(
// 	flatten([
// 		[true, false],
// 		[false, false],
// 	])
// );

console.log('question 11 ->');
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
function stolenItems(obj) {
	if (Object.keys(obj).length == 0) return 'Lucky you!';
	return Object.values(obj).reduce((acc, val) => acc + val);
}
// console.log(
// 	stolenItems({
// 		tv: 30,
// 		skate: 20,
// 		stereo: 50,
// 	})
// );
// console.log(
// 	stolenItems({
// 		painting: 20000,
// 	})
// );
// console.log(stolenItems({}));

console.log('question 12 ->');
// Create a function that takes an array of numbers and returns the second largest number.
function secondLargest(arr) {
	const min = Math.max(...arr);
	arr.splice(arr.indexOf(min), 1);
	const second_min = Math.max(...arr);
	return second_min;
}
// console.log(secondLargest([10, 40, 30, 20, 50]));
// console.log(secondLargest([25, 143, 89, 13, 105]));
// console.log(secondLargest([54, 23, 11, 17, 10]));

console.log('question 13 ->');
// Create a function that returns true if all parameters are truthy, and false otherwise.
function allTruthy(...arr) {
	return arr.every(val => (typeof val == 'string' ? val.trim() : val));
}
// console.log(allTruthy(true, true, true));
// console.log(allTruthy(true, false, true));
// console.log(allTruthy(5, 4, 3, 2, 1, 0));

console.log('question 14 ->');
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
function testJackpot(arr) {
	let set = new Set(arr);
	return set.size == 1;
}
// console.log(testJackpot(['@', '@', '@', '@']));
// console.log(testJackpot(['abc', 'abc', 'abc', 'abc']));
// console.log(testJackpot(['SS', 'SS', 'SS', 'SS']));
// console.log(testJackpot(['&&', '&', '&&&', '&&&&']));
// console.log(testJackpot(['SS', 'SS', 'SS', 'Ss']));

console.log('question 15 ->');
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
function findNemo(str) {
	//use string function
	const is_exist = str.split(' ').indexOf('Nemo') + 1;
	return is_exist != 0 ? `I found Nemo at ${is_exist}` : "I can't find Nemo";
}
// console.log(findNemo('I am finding Nemo !'));
// console.log(findNemo('Nemo is me'));
// console.log(findNemo('I Nemo am'));
// console.log(findNemo('I am'));

console.log('question 16 ->');
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
// As an example, for:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.
// Write a function that takes a square matrix and computes its trace.
function trace(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i][i];
	}
	return sum;
}
// console.log(
// 	trace([
// 		[1, 4],
// 		[4, 1],
// 	])
// );
// console.log(
// 	trace([
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 	])
// );
// console.log(
// 	trace([
// 		[1, 0, 1, 0],
// 		[0, 2, 0, 2],
// 		[3, 0, 3, 0],
// 		[0, 4, 0, 4],
// 	])
// );

console.log('question 17 ->');
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
function clone(arr) {
	arr.push([...arr]);
	return arr;
}
// console.log(clone([1, 1]));
// console.log(clone([1, 2, 3]));
// console.log(clone(['x', 'y']));

console.log('question 18 ->');
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
function totalVolume(...arr) {
	let total = 0;
	arr.map(val => (total += val.reduce((acc, val) => val * acc)));
	return total;
}
// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));
// console.log(totalVolume([1, 1, 1]));

console.log('question 19 ->');
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
function indexMultiplier(arr) {
	return arr.reduce((acc, val, index) => (acc += val * index), 0);
}
// console.log(indexMultiplier([1, 2, 3, 4, 5]));
// console.log(indexMultiplier([-3, 0, 8, -6]));
