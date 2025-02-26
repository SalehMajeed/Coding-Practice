function imposterFormula(i, p) {
	return 10 >= p && 3 >= i ? Math.round(100 * (i / p)) + '%' : '';
}
console.log(imposterFormula(1, 10));
console.log(imposterFormula(2, 5));
console.log(imposterFormula(1, 8));
