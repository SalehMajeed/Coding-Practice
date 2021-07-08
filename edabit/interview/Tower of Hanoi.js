function towerHanoi(discs) {
	return 2 ** discs - 1;
}

console.log(towerHanoi(3), 7);
console.log(towerHanoi(5), 31);
console.log(towerHanoi(8), 255);
console.log(towerHanoi(19), 524287);
console.log(towerHanoi(9), 511);
console.log(towerHanoi(13), 8191);
console.log(towerHanoi(0), 0);
