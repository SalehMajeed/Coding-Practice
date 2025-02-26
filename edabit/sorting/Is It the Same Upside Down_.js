function same_upsidedown([...strNum]) {
	const reverse_str = strNum
		.map(val => {
			if (val == 6) {
				return (val = 9);
			} else if (val == 9) {
				return (val = 6);
			} else {
				return val;
			}
		})
		.reverse();
	return String(reverse_str) == String(strNum);
}

console.log(same_upsidedown('6090609'));
console.log(same_upsidedown('9669'));
console.log(same_upsidedown('69069069'));
