function operate(num1, num2, operator) {
	return eval(num1 + operator + num2);
}
console.log(operate(1, 2, '+'));
console.log(operate(7, 10, '-'));
console.log(operate(20, 10, '%'));
