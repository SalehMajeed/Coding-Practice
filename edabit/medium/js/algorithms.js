// Your task is to determine if two nodes are adjacent in a graph when given the adjacency matrix and the two nodes.

function isAdjacent(matrix, node1, node2) {
	return matrix[node1][node2] == 1;
}

// console.log(
// 	isAdjacent(
// 		[
// 			[0, 1, 0, 0],
// 			[1, 0, 1, 1],
// 			[0, 1, 0, 1],
// 			[0, 1, 1, 0],
// 		],
// 		0,
// 		1
// 	)
// );
// console.log(
// 	isAdjacent(
// 		[
// 			[0, 1, 0, 0],
// 			[1, 0, 1, 1],
// 			[0, 1, 0, 1],
// 			[0, 1, 1, 0],
// 		],
// 		0,
// 		2
// 	)
// );

// console.log(
// 	isAdjacent(
// 		[
// 			[0, 1, 0, 1, 1],
// 			[1, 0, 1, 0, 0],
// 			[0, 1, 0, 1, 0],
// 			[1, 0, 1, 0, 1],
// 			[1, 0, 0, 1, 0],
// 		],
// 		0,
// 		3
// 	)
// );

// console.log(
// 	isAdjacent(
// 		[
// 			[0, 1, 0, 1, 1],
// 			[1, 0, 1, 0, 0],
// 			[0, 1, 0, 1, 0],
// 			[1, 0, 1, 0, 1],
// 			[1, 0, 0, 1, 0],
// 		],
// 		1,
// 		4
// 	)
// );

// A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
function paths(n) {
	if (1 >= n) return 1;
	return n * paths(n - 1);
}
// console.log(paths(4));
// console.log(paths(1));
// console.log(paths(9));

// Write a function that gives the number of dots with its corresponding triangle number of the sequence.
function triangle(num) {
	return (num * (num + 1)) / 2;
}
// console.log(triangle(1));
// console.log(triangle(6));
// console.log(triangle(215));

// Create a function that squares every digit of a number.
function squareDigits(num) {
	return +String(num)
		.split('')
		.map(each_number => each_number * each_number)
		.join('');
}
// console.log(squareDigits(9119));
// console.log(squareDigits(2483));
// console.log(squareDigits(3212));

// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
function boxSeq(num) {
	return num % 2 == 1 ? num + 2 : num;
}
// console.log(boxSeq(0));
// console.log(boxSeq(1));
// console.log(boxSeq(2));

// Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.
function isSastry(num) {
	let sqrt_num = Math.sqrt(+(num + `${num + 1}`));
	return sqrt_num == parseInt(sqrt_num);
}
// console.log(isSastry(183));
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)

// console.log(isSastry(184));
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square

// console.log(isSastry(106755));
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2)

// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
function missingNum(arr) {
	return 55 - arr.reduce((acc, val) => acc + val);
}
// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.
function equal(a, b, c) {
	return a == b && b == c ? 3 : a == b || b == c || c == a ? 2 : 0;
}
// console.log(equal(3, 4, 3));
// console.log(equal(1, 1, 1));
// console.log(equal(3, 4, 1));

// Create a function that returns the mean of all digits.
function mean(num) {
    let str = String(num);
	str = str[0] == '-' ? str.slice(1) : str;
	return [...str].reduce((acc, val) => +acc + +val) / str.length;
}
// console.log(mean(42));
// console.log(mean(12345));
// console.log(mean(666));

// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.
function solveForExp(a, b) {
	return Math.round(Math.log(b) / Math.log(a));
}
// console.log(solveForExp(4, 1024));
// console.log(solveForExp(2, 1024));
// console.log(solveForExp(9, 3486784401));
