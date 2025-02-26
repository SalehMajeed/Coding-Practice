function color_invert(rgb) {
	return [255 - rgb[0], 255 - rgb[1], 255 - rgb[2]];
}

console.log(color_invert([255, 255, 255]));
console.log(color_invert([0, 0, 0]));
console.log(color_invert([165, 170, 221]));
