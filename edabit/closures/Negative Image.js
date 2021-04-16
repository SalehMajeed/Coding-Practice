function reverseImage(image) {
	return image.map(row => row.map(col => +!col));
}

console.log(
	reverseImage([
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
	])
);

console.log(
	reverseImage([
		[1, 1, 1],
		[0, 0, 0],
	])
);
console.log(
	reverseImage([
		[1, 0, 0],
		[1, 0, 0],
	])
);
