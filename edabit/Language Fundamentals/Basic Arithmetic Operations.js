function operation(a, b, op) {
	a = +a;
	b = +b;
	switch (op) {
		case 'add':
			return a + b;
		case 'divide':
			return a / b == Infinity ? 'undefined' : a / b;
		case 'multiply':
			return a * b;
		case 'subtract':
			return a - b;
	}
}

let [actualParam, expectedParam] = [
	[
		['1', '2', 'add'],
		['1', '-20', 'add'],
		['9', '0', 'divide'],
		['10', '10', 'multiply'],
		['-10', '-10', 'multiply'],
		['10', '10', 'subtract'],
		['0', '0', 'subtract'],
		['0', '1', 'divide'],
		['0', '25415', 'divide'],
	],
	[3, -19, 'undefined', 100, 100, 0, 0, 0, 0],
];
for (let i in actualParam) console.log(operation(...actualParam[i]), expectedParam[i]);
console.log(operation(operation('10', '10', 'multiply'), operation('10', '10', 'add'), 'divide'), 5);
