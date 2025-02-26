function imposter_formula(i, p) {
	return Math.round(100 * (i / p)) + '%';
}

console.log(imposter_formula(1, 10));
console.log(imposter_formula(2, 5));
console.log(imposter_formula(1, 8));
