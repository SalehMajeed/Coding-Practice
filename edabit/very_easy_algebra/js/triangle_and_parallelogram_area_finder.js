function areaShape(base, height, type) {
	return base * height * (type == 'triangle' ? 0.5 : 1);
}
console.log(areaShape(2, 3, 'triangle'));
console.log(areaShape(8, 6, 'parallelogram'));
console.log(areaShape(2.9, 1.3, 'parallelogram'));
