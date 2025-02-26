function colouredTriangle(row) {
	let str = row.length > 1 ? '' : row;
	for (let i = 0; i < row.length - 1; i++) {
		str += row[i] == row[i + 1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i + 1], '');
	}
	return str.length > 1 ? colouredTriangle(str) : str;
}

console.log(colouredTriangle('GB'), 'R');
console.log(colouredTriangle('RRR'), 'R');
console.log(colouredTriangle('RGBG'), 'B');
console.log(colouredTriangle('RBRGBRB'), 'G');
console.log(colouredTriangle('RBRGBRBGGRRRBGBBBGG'), 'G');
console.log(colouredTriangle('B'), 'B');
