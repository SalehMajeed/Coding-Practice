function inchesToFeet(inches) {
	return 12 > inches ? 0 : 12 == inches ? 1 : inches / 12;
}
console.log(inchesToFeet(324));
console.log(inchesToFeet(12));
console.log(inchesToFeet(36));
