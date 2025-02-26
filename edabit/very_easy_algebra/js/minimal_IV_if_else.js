function compare_to_100(x) {
	if (x > 0) return 'greater';
	if (x < 0) return 'smaller';
	return 'equal';
}

console.log(compare_to_100(0));
console.log(compare_to_100(1));
console.log(compare_to_100(-1));
