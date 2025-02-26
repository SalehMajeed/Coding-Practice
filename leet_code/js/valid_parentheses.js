function is_valid(s) {
	// return /(\{(\[\])?(\(\))?\})|(\[(\{\})?(\(\))?\])|(\((\[\])?(\{\})?\))/g.test(s);
	const stack = [];
	const obj = {
		'}': '{',
		')': '(',
		']': '[',
	};
	// for (const char of s) {
	// 	if ('({['.includes(char)) {
	// 		stack.push(char);
	// 	} else if (
	// 		')}]'.includes(char) &&
	// 		stack.length &&
	// 		(stack[stack.length - 1].charCodeAt() + 1 == char.charCodeAt() ||
	// 			stack[stack.length - 1].charCodeAt() + 2 == char.charCodeAt())
	// 	) {
	// 		stack.pop();
	// 	} else {
	// 		return false;
	// 	}
	// }

	// for (const char of s) {
	// 	if ('({['.includes(char)) {
	// 		stack.push(char);
	// 	} else if (stack[stack.length - 1] == obj[char]) {
	// 		stack.pop();
	// 	} else {
	// 		return false;
	// 	}
	// }

	for (let i = 0; i < s.length; i++) {
		if ('({['.includes(s[i])) {
			stack.push(s[i]);
		} else if (stack[stack.length - 1] == obj[s[i]]) {
			stack.pop();
		} else {
			return false;
		}
	}
	return stack.length == 0 ? true : false;
}
console.log(is_valid('()')); // true
console.log(is_valid('()[]{}')); // true
console.log(is_valid('(]')); // false
console.log(is_valid('([)]')); // false
console.log(is_valid('{[]}')); // true
console.log(is_valid('(){}}{')); // false
