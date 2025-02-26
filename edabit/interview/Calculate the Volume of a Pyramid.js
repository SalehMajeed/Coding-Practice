function pyramidVolume(length, width, height, unit) {
	const calculation = (1 / 3) * (length * width * height);
	if (unit == 'kilometers') {
		return `${(calculation * 0.000000001).toFixed(3)} cubic ${unit}`;
	} else if (unit == 'centimeters') {
		return `${(calculation * 1000000).toFixed(3)} cubic ${unit}`;
	} else {
		return `${(calculation * 1000000000).toFixed(3)} cubic ${unit}`;
	}
}

console.log(pyramidVolume(4, 6, 20, 'centimeters'));
console.log(pyramidVolume(1843, 1823, 923, 'kilometers'));
console.log(pyramidVolume(18, 412, 93, 'millimeters'));
