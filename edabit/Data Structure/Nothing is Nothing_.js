function nothing_is_nothing(...arg) {
	return arg.every(val => Boolean(val));
}

console.log(nothing_is_nothing(0, false, undefined, null));
console.log(nothing_is_nothing(33, 'Hello', true, []));
console.log(nothing_is_nothing(true, false));
