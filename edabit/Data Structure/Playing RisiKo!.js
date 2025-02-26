function risiko(att, def) {
	let attack = 0;
	let defence = 0;
	let index = 0;

	att.sort((a, b) => b - a);
	def.sort((a, b) => b - a);
	if (att.length > def.length) {
		att = att.slice(0, def.length);
	} else if (att.length < def.length) {
		def = att.slice(0, att.length);
	}
	for (const val of att) {
		if (val > def[index]) {
			attack++;
		} else {
			defence++;
		}
		index++;
	}
	return Math.abs(attack);
}

console.log(risiko([3, 6, 4], [2, 5, 3]));
console.log(risiko([3, 6], [6, 4, 4]));
console.log(risiko([3, 1], [1]));
