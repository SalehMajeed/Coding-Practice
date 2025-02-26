function matrix(x, y, z) {
	return Array(x).fill(Array(y).fill(z));
}

console.log(matrix(3, 2, 3));
console.log(matrix(2, 1, 'edabit'));
console.log(matrix(3, 2, 0));
