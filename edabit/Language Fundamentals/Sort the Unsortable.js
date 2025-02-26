function sortIt(arr) {
	return arr.sort((a, b) => (a > b ? 1 : -1));
}

console.log(sortIt([4, 1, 3]), [1, 3, 4]);
console.log(sortIt([[4], [1], [3]]), [[1], [3], [4]]);
console.log(sortIt([4, [1], 3]), [[1], 3, 4]);
console.log(sortIt([[4], 1, [3]]), [1, [3], [4]]);
console.log(sortIt([[3], 4, [2], [5], 1, 6]), [1, [2], [3], 4, [5], 6]);
console.log(sortIt([[3], 7, [9], [5], 1, 6]), [1, [3], [5], 6, 7, [9]]);
console.log(sortIt([[3], 7, [9], [5], 1, 6, [0]]), [[0], 1, [3], [5], 6, 7, [9]]);
