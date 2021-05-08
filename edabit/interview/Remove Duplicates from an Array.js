function remove_dups(arr) {
	return Array.from(new Set(arr));
}

console.log(remove_dups([1, 0, 1, 0]));
console.log(remove_dups(['The', 'big', 'cat']));
console.log(remove_dups(['John', 'Taylor', 'John']));
