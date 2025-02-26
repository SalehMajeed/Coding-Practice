function convert(hours, minutes) {
	return 60 * (60 * hours + minutes);
}
console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));
