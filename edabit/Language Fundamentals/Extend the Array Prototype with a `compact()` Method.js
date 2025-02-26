Array.prototype.compact = function () {
	const obj = {};
	return this.reduce((acc, val) => {
		if (!(val in obj) && (val != undefined || val != null)) {
			obj[val] = true;
			acc.push(val);
		}
		return acc;
	}, []);
};

console.log([9, 9, 9, 8, 0, undefined].compact(), [9, 8, 0], 'Test #1');
console.log(['', 'hello', null, null, 'hello'].compact(), ['hello'], 'Test #2');
console.log([1, 2, 2, 3, null, 0, '', undefined, 'another'].compact(), [1, 2, 3, 0, 'another'], 'Test #3');
console.log([true, true, false, 0, null].compact(), [true, false, 0], 'Test #4');
