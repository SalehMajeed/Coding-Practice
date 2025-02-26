function reversedBinaryInteger(num) {
	return parseInt(num.toString(2).split('').reverse().join(''), 2);
}

console.log(reversedBinaryInteger(1), 1);
console.log(reversedBinaryInteger(4), 1);
console.log(reversedBinaryInteger(5), 5);
console.log(reversedBinaryInteger(31), 31);
console.log(reversedBinaryInteger(82), 37);
console.log(reversedBinaryInteger(90), 45);
console.log(reversedBinaryInteger(255), 255);
console.log(reversedBinaryInteger(446), 251);
console.log(reversedBinaryInteger(451), 391);
console.log(reversedBinaryInteger(634), 377);
console.log(reversedBinaryInteger(776), 67);
console.log(reversedBinaryInteger(898), 263);
console.log(reversedBinaryInteger(1103), 1937);
console.log(reversedBinaryInteger(3801), 2487);
console.log(reversedBinaryInteger(4096), 1);
console.log(reversedBinaryInteger(8505), 10017);
console.log(reversedBinaryInteger(428293), 328843);
console.log(reversedBinaryInteger(547643), 904609);
console.log(reversedBinaryInteger(612965), 681385);
console.log(reversedBinaryInteger(999999), 1033263);
