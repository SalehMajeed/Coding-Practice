function doubleton(n) {
	let val = n;
	while (new Set(String(val)).size != 2) {
		val++;
	}
	return val;
}

console.log(doubleton(10));
console.log(doubleton(120));
console.log(doubleton(1234));
