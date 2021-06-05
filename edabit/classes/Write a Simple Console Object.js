class Console {
	constructor() {
		this.history_data = [];
	}

	log(...args) {
		const result = args.reduce((acc, val) => (acc += typeof val == 'object' ? JSON.stringify(val) : `${val}`), '');
		this.history_data.push(result);
		return result;
	}

	history(range) {
		return this.history_data.join('\n');
	}

	clearHistory() {
		this.history_data = [];
		return true;
	}
}

const myConsole = new Console();

console.log(myConsole.log([0, 1, 2, 3]));
console.log(
	myConsole.log('ok : ', function () {
		return 'hello world !';
	})
);
console.log(myConsole.history());
console.log(myConsole.clearHistory());
console.log(myConsole.history());
