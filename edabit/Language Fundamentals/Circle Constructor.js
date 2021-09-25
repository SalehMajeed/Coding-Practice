function Circle(r) {
	return {
		radius: r,
		diameter: 2 * r,
		getC: () => {
			return (2 * Math.PI * r).toFixed(2);
		},
		getA: () => {
			return (Math.PI * r ** 2).toFixed(2);
		},
	};
}

const c1 = new Circle(3);
const c2 = new Circle(5);

console.log(c1.radius, 3);
console.log(c1.diameter, 6);
console.log(c1.getC(), 18.85);
console.log(c1.getA(), 28.27);
console.log(c2.radius, 5);
console.log(c2.diameter, 10);
console.log(c2.getC(), 31.42);
console.log(c2.getA(), 78.54);
