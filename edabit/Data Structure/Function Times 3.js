function product(val1, val2) {
	return (val3, val4) => {
		return (val5, val6) => {
			return val1 * val3 * val5 + val2 * val4 * val6;
		};
	};
}

console.log(product(1, 2)(1, 1)(2, 3), 8);
console.log(product(10, 2)(5, 0)(2, 3), 100);
console.log(product(1, 2)(2, 3)(3, 4), 30);
console.log(product(1, 2)(0, 3)(3, 0), 0);
