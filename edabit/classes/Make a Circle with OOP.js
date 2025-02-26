class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	getArea() {
		return Math.PI * this.radius ** 2;
	}
	getPerimeter() {
		return 2 * Math.PI * this.radius;
	}
}

const q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());

const circy = new Circle(11);
console.log(circy.getArea());
