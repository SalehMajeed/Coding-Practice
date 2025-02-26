function swap(a, b) {
	[a, b] = [b, a];
	return [a, b];
}

console.log(swap(100, 200));
console.log(swap(44, 33));
console.log(swap(21, 12));
