function paths(n) {
	if (n <= 1) {
		return n;
	}
	return n * paths(n - 1);
}

console.log(paths(3));
console.log(paths(1));
console.log(paths(9));