// class Stack {
// 	constructor(input = '') {
// 		this.input = input
// 			.replace(/[^0-9^a-z]/gi, ' ')
// 			.trim()
// 			.split(' ');
// 		this.operations = input
// 			.replace(/[0-9a-z]/gi, '')
// 			.trim()
// 			.split(' ');
// 		this.result = 0;
// 		this.calculate();
// 	}
// 	calculate() {
// 		if (this.input.includes('DUP') == true) {
// 			this.input = String(this.input)
// 				.replace(/DUP/gi, this.input[this.input.length - 2])
// 				.split(',');
// 		}
// 		for (let i = 0; i < this.operations.length; i++) {
// 			if ((this.input.length > 1 && !+this.input[this.input.length - 1]) || !+this.input[this.input.length - 2]) {
// 				return `invalid ${this.input[this.input.length - 1]}`;
// 			}
// 			if (this.operations[i] == '+') {
// 				this.result = +this.input.pop() + +this.input.pop();
// 			} else if (this.operations[i] == '-') {
// 				this.result = +this.input.pop() - +this.input.pop();
// 			} else if (this.operations[i] == '/') {
// 				this.result = +this.input.pop() / +this.input.pop();
// 			} else if (this.operations[i] == '*') {
// 				this.result = +this.input.pop() * +this.input.pop();
// 			}
// 			this.input.push(this.result);
// 		}
// 		return this.result;
// 	}
// }

// const StackCalc2 = new Stack(''); // 0
// const StackCalc3 = new Stack('5 6 +'); // 11
// const StackCalc4 = new Stack('3 DUP +'); // 6
// const StackCalc5 = new Stack('6 5 5 7 * - /'); // 5
// const StackCalc6 = new Stack('x y +'); // Invalid instruction: x

class stack {
	constructor() {
		this.stack = [];
		this.operations = [];
	}

	run(instructions) {
		this.stack = instructions
			.replace(/[+-/*]|DUP|POP/g, '')
			.trim()
			.split(' ');
		this.operations = instructions.replace(/[0-9]/g, '').trim().split(' ');
		if (this.stack.length == 1 && this.operations.length <= 1) return this.stack[0];
		for (let i = 0; i < this.operations.length; i++) {
			let [x, y] = [this.stack.pop(), this.stack.pop()];
			if (isNaN(+x) || (isNaN(+y) && typeof y != undefined)) {
				return `invalid Invalid instruction: ${x || y}`;
			} else {
				x = +x;
				y = +y;
			}
			switch (this.operations[i]) {
				case '+':
					this.stack.push(x + y);
					break;
				case '-':
					this.stack.push(x - y);
					break;
				case '*':
					this.stack.push(x * y);
					break;
				case '/':
					this.stack.push(x / y);
					break;
				case 'DUP':
					this.stack.push(x, x);
					break;
				case 'POP':
					break;
			}
		}

		return this.stack[0];
	}

	get value() {
		return this.stack;
	}
}
{
	const StackCalc1 = new stack();
	const StackCalc2 = new stack();
	const StackCalc3 = new stack();
	const StackCalc4 = new stack();
	const StackCalc5 = new stack();
	const StackCalc6 = new stack();
	const StackCalc7 = new stack();
	const StackCalc8 = new stack();
	const StackCalc9 = new stack();
	const StackCalc10 = new stack();
	const StackCalc11 = new stack();
	const StackCalc12 = new stack();
	const StackCalc13 = new stack();
	const StackCalc14 = new stack();
	const StackCalc15 = new stack();
	const StackCalc16 = new stack();

	// console.log(StackCalc1.run('12')); /// 12
	// console.log(StackCalc2.run('5 6 +')); // 11
	console.log(StackCalc3.run('3 6 -')); // 3
	// console.log(StackCalc4.run('3 DU/P +')); // 6
	console.log(StackCalc5.run('2 5 - 5 + DUP +')); // 16
	console.log(StackCalc6.run('9 14 DUP + - 3 POP')); // 19
	console.log(StackCalc7.run('1 2 3 4 5 POP POP POP')); // 2
	console.log(StackCalc8.run('13 DUP 4 POP 5 DUP + DUP + -')); // 7
	console.log(StackCalc9.run('6 5 5 7 * - /')); // 5
	console.log(StackCalc10.run('4 2 4 * 3 + 5 + / 5 -')); // 1
	console.log(StackCalc11.run('5 8 + 4 5 1 + POP 13 +')); // 17
	console.log(StackCalc12.run('x')); // Invalid instruction: x
	console.log(StackCalc13.run('4 6 + x')); // Invalid instruction: x
	console.log(StackCalc14.run('y x *')); // Invalid instruction: y
	console.log(StackCalc15.run('')); // 0
	console.log(StackCalc16.run('4')); // 0
}
