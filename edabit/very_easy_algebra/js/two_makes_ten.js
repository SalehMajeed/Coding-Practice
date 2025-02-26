function makesTen(n1, n2) {
	return n1 == 10 || n2 == 10 || n1 + n2 == 10;
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));
