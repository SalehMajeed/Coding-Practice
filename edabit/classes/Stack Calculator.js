class StackCalc {
	constructor() {
		this.stack = [];
	}
	run(instructions) {
		if (instructions == '') {
			this.stack.push(0);
			return;
		}
		const instruction = instructions.split(' ');
		for (const val of instruction) {
			if (/\d/g.test(val)) {
				this.stack.push(+val);
			} else {
				const result = this.operation(val);
				if (result) {
					this.stack.push(result);
					break;
				} else {
				}
			}
		}
		return this.val;
	}
	get value() {
		return this.stack.slice(-1)[0] || 0;
	}
	operation(type) {
		const first_val = this.stack.pop();
		const second_val = this.stack.pop();
		switch (type) {
			case '+':
				this.stack.push(first_val + second_val);
				break;
			case '-':
				this.stack.push(first_val - second_val);
				break;
			case '*':
				this.stack.push(first_val * second_val);
				break;
			case '/':
				this.stack.push(first_val / second_val);
				break;
			case 'DUP':
				this.stack.push(second_val);
				this.stack.push(first_val);
				this.stack.push(first_val);
				break;
			case 'POP':
				this.stack.push(second_val);
				break;
			default:
				return `Invalid instruction: ${type}`;
		}
	}
}

const tests = [
	{
		arg: '12',
		ans: 12,
	},
	{
		arg: '5 6 +',
		ans: 11,
	},
	{
		arg: '3 6 -',
		ans: 3,
	},
	{
		arg: '3 DUP +',
		ans: 6,
	},
	{
		arg: '2 5 - 5 + DUP +',
		ans: 16,
	},
	{
		arg: '9 14 DUP + - 3 POP',
		ans: 19,
	},
	{
		arg: '1 2 3 4 5 POP POP POP',
		ans: 2,
	},
	{
		arg: '13 DUP 4 POP 5 DUP + DUP + -',
		ans: 7,
	},
	{
		arg: '6 5 5 7 * - /',
		ans: 5,
	},
	{
		arg: '4 2 4 * 3 + 5 + / 5 -',
		ans: 1,
	},
	{
		arg: '5 8 + 4 5 1 + POP 13 +',
		ans: 17,
	},
	{
		arg: 'x',
		ans: 'Invalid instruction: x',
	},
	{
		arg: '4 6 + x',
		ans: 'Invalid instruction: x',
	},
	{
		arg: 'y x *',
		ans: 'Invalid instruction: y',
	},
	{
		arg: '',
		ans: 0,
	},
	{
		arg: '4 POP',
		ans: 0,
	},
];
for (const { arg, ans } of tests) {
	const machine = new StackCalc();
	machine.run(arg);
	console.log(machine.value, ans);
}
