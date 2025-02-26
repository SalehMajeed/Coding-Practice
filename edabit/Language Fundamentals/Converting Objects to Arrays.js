function toArray(obj) {
	return Object.keys(obj).map(val => (val = [val, obj[val]]));
}

console.log(toArray({ a: 1, b: 2 }), [
	['a', 1],
	['b', 2],
]);
console.log(toArray({ foo: 33, bar: 45, baz: 67 }), [
	['foo', 33],
	['bar', 45],
	['baz', 67],
]);
console.log(toArray({ shrimp: 15, tots: 12 }), [
	['shrimp', 15],
	['tots', 12],
]);
console.log(toArray({}), []);
