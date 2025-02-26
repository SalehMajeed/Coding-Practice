function rearranged_difference(num) {
	return (
		String(num)
			.split('')
			.sort((a, b) => (a > b ? -1 : 1))
			.join('') -
		String(num)
			.split('')
			.sort((a, b) => (a > b ? 1 : -1))
			.join('')
	);
}

console.log(rearranged_difference(972882));
console.log(rearranged_difference(3320707));
console.log(rearranged_difference(90010));
