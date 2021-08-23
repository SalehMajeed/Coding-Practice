function product(a1, a2) {
	return (a3, a4) => (a5, a6) => a1 * a3 * a5 + a2 * a4 * a6;
}

console.log(product(1, 2)(1, 1)(2, 3), 8);
console.log(product(10, 2)(5, 0)(2, 3), 100);
console.log(product(1, 2)(2, 3)(3, 4), 30);
console.log(product(1, 2)(0, 3)(3, 0), 0);
