function two_method() {
	const methodOne = 'hello'.match(/hello/)[0] === 'hello';
	const methodTwo = /hello/.test('hello');
	return methodOne && methodTwo;
}

console.log(two_method());
