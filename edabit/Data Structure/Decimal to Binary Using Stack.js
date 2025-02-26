function Stack() {
	let data = [];
	this.push = function (item) {
		data.push(item);
	};
	this.isEmpty = function () {
		return !data.length;
	};
	this.pop = function () {
		return data.pop();
	};
	this.peek = function () {
		return data[data.length - 1];
	};
	this.size = function () {
		return data.length;
	};
}

function toBinary(num) {
	if (num == 0) {
		return 0;
	}

	let result = '';
	let stack = new Stack();

	while (num >= 1) {
		stack.push(num % 2);
		num = parseInt(num / 2);
	}

	while (stack.size() != 0) {
		result += stack.pop();
	}

	return +result;
}

console.log(toBinary(12));
console.log(toBinary(0));
console.log(toBinary(101));
