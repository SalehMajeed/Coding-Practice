function createTest(a, b) {
	if (typeof a == 'object') {
		return a.concat(b);
	}
	return a + b;
}
console.log(createTest('a', 'b'), 'ab');
console.log(createTest('Te', 'st'), 'Test');
console.log(createTest('1', '1'), '11');
console.log(createTest(1, 1), 2);
console.log(createTest(99, 1), 100);
console.log(createTest(0, 0), 0);
console.log(createTest([1], [1]), [1, 1]);
console.log(createTest(['1'], ['1']), ['1', '1']);
console.log(createTest(['String'], ['String']), ['String', 'String']);
