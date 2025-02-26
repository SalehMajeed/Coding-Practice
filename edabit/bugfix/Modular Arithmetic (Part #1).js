function mod(base, exp, k) {
	return base ** (2 ** exp) % k;
}
console.log(mod(10, 1, 99), 1);
console.log(mod(3, 2, 15), 6);
console.log(mod(123, 20, 1234), 391);
console.log(mod(3, 5, 15), 6);
console.log(mod(10, 5, 99), 1);
console.log(mod(11, 23, 23), 8);
console.log(mod(11, 1000, 23), 12);
console.log(mod(5432, 234625, 4321), 1734);
console.log(mod(146145432, 5423345, 542), 100);
