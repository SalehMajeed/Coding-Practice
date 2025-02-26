function high_low(str) {
	return [Math.min(...str.split(' ')), Math.max(...str.split(' '))];
}

console.log(high_low('1 2 3 4 5'));
console.log(high_low('1 2 -3 4 5'));
console.log(high_low('1 9 3 4 -5'));
console.log(high_low('13'));
