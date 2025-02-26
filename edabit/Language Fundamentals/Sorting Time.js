function sortArray(arr) {
	return arr.sort((a, b) => (a > b ? 1 : -1));
}
console.log(sortArray([2, -5, 1, 4, 7, 8]), [-5, 1, 2, 4, 7, 8]);
console.log(sortArray([23, 15, 34, 17, -28]), [-28, 15, 17, 23, 34]);
console.log(sortArray([38, 57, 45, 18, 47, 39]), [18, 38, 39, 45, 47, 57]);
console.log(sortArray([26, -1, -45, 74, 20]), [-45, -1, 20, 26, 74]);
