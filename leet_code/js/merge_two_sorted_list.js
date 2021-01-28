function travers(val, next) {
	if (next == null) return val;
	return [val, travers(next.val, next.next)];
}

function merge_two_list(l1, l2) {
	const stack = [];
	stack.push(...travers(l1.val, l1.next).flat(Infinity));
	stack.push(...travers(l2.val, l2.next).flat(Infinity));
	return stack.sort((a, b) => (a > b ? 1 : -1));
}

const l1 = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 4,
			next: {
				val: 5,
				next: null,
			},
		},
	},
};

const l2 = {
	val: 1,
	next: {
		val: 3,
		next: {
			val: 4,
			next: null,
		},
	},
};
console.log(merge_two_list(l1, l2));
