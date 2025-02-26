class Calculator {
	add(x, y) {
		return x + y;
	}
	subtract(x, y) {
		return x - y;
	}
	multiply(x, y) {
		return x * y;
	}
	divide(x, y) {
		return x / y;
	}
}

var calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
