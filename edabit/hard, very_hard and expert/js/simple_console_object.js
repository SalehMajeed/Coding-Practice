class Console {
	constructor() {
		this.str = [];
		this.history_data = [];
	}
	log(...arg) {
		const result = arg
			.map(val => {
				val = typeof val == 'object' ? JSON.stringify(val) : String(val);
				return val;
			})
			.join('');
		this.history_data.push(result);
		return result;
	}
	history([start = 0, max = 0] = []) {
		if (start == 0 && max == 0) {
			start = 1;
			max = this.history_data.length;
		}
		if (start < 0) {
			start = 1;
		}
		if (max <= 0) {
			max = this.history_data.length;
		}
		if (start > max) {
			[start, max] = [max + 1, start];
		}
		return [...this.history_data].slice(start - 1, max).join('\n');
	}
	clear_history() {
		this.history_data = [];
		return true;
	}
}

const myConsole = new Console();
{
	console.log(myConsole.log('first test', 1)); // "first test1"
	console.log(myConsole.log('second test', [2])); // "second test[2]"
	console.log(myConsole.log('object test ! ', { myObjectIsHere: true })); // "object test ! {\"myObjectIsHere\":true}"
	console.log(
		myConsole.log('and my function ? ', function () {
			return 'hello challengers';
		})
	); // "and my function ? function (){ return \"hello challengers\" }"
	console.log(
		myConsole.log(' alll ??? ', [1, 2, 3, 4], { here: true }, function () {
			return 1;
		})
	); // " alll ??? [1,2,3,4]{\"here\":true}function (){return 1}"
	console.log(myConsole.log(null));
} // "null"

console.log(myConsole.history([1, 2])); // 'first test1\nsecond test[2]');
console.log(myConsole.history([2, 3])); // 'second test[2]\nobject test ! {"myObjectIsHere":true}');
console.log(myConsole.history([3, 2])); // 'object test ! {"myObjectIsHere":true}');
console.log(myConsole.history([-1])); //'first test1\nsecond test[2]\nobject test ! {"myObjectIsHere":true}\nand my function ? function (){ return "hello challengers" }\n alll ??? [1,2,3,4]{"here":true}function (){return 1}\nnull'

console.log(myConsole.history([-1, 2])); // 'first test1\nsecond test[2]');
console.log(myConsole.history([5, 100000000])); // ' alll ??? [1,2,3,4]{"here":true}function (){return 1}\nnull');
console.log(myConsole.history()); //'first test1\nsecond test[2]\nobject test ! {"myObjectIsHere":true}\nand my function ? function (){ return "hello challengers" }\n alll ??? [1,2,3,4]{"here":true}function (){return 1}\nnull'
console.log(myConsole.clear_history()); // true);
console.log(myConsole.history()); // '');
