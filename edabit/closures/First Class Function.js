function factory(num) {
	return arr => {
		return arr.map(val => val / num);
	};
}

const first = factory(15);
let arr = [30, 45, 60];
console.log(first(arr));

const second = factory(2);
arr = [2, 4, 6];
console.log(second(arr));
