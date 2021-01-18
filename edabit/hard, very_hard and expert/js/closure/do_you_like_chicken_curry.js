const product = (x1, y1) => (x2, y2) => (x3, y3) => x1 * x2 * x3 + y1 * y2 * y3;

console.log(product(1, 2)(1, 1)(2, 3));
console.log(product(10, 2)(5, 0)(2, 3));
console.log(product(1, 2)(2, 3)(3, 4));
console.log(product(1, 2)(0, 3)(3, 0));
