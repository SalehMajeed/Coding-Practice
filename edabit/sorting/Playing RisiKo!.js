function risiko(att, def) {
	att.sort((a, b) => (a > b ? -1 : 1));
	def.sort((a, b) => (a > b ? -1 : 1));
	const min = Math.min(att.length, def.length);
	let attack = 0;
	let defence = 0;
	for (let i = 0; i < min; i++) {
		if (att[i] > def[i]) {
			attack++;
		} else {
			defence++;
		}
	}
	return attack;
}

console.log(risiko([3, 6, 4], [2, 5, 3]));
console.log(risiko([3, 6], [6, 4, 4]));
console.log(risiko([3, 1], [1]));
