function jazzify(arr) {
	return arr.map(v => {
		if (!/7/g.test(v)) {
			return (v += '7');
		} else {
			return v;
		}
	});
}

console.log(jazzify(['G', 'F', 'C']), ['G7', 'F7', 'C7']);
console.log(jazzify(['Dm', 'G', 'E', 'A']), ['Dm7', 'G7', 'E7', 'A7']);
console.log(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']), ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']);
console.log(jazzify(['G', 'C7']), ['G7', 'C7']);
console.log(jazzify([]), []);
