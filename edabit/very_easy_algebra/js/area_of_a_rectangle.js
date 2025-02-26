function area(width, height) {
	return 0 >= width || 0 >= height ? -1 : width * height;
}
console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));
