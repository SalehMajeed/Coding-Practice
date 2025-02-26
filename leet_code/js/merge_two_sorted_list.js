function travers(val, next) {
	if (val == null) {
		return 0;
	}
	if (next == null) {
		return `${val}`;
	}
	return `${val} ${travers(next.val, next.next)}`;
}

function merge_two_list(l1, l2) {
	const stack = [];
	let list = null;
	if (l1 != null) {
		stack.push(...travers(l1.val, l1.next).split(' '));
	}
	if (l2 != null) {
		stack.push(...travers(l2.val, l2.next).split(' '));
	}
	stack
		.sort((a, b) => (+a > +b ? 1 : -1))
		.reverse()
		.map(each_val => {
			list = { val: +each_val, next: list };
		});
	return list;
}

let l1 = {
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

let l2 = {
	val: 1,
	next: {
		val: 3,
		next: {
			val: 4,
			next: null,
		},
	},
};
// console.log(merge_two_list(l1, l2));

// (l1 = null), (l2 = null);
// console.log(merge_two_list(l1, l2));

l1 = null;
l2 = {
	val: 0,
	next: null,
};
console.log(merge_two_list(l1, l2));

l1 = {
	val: -10,
	next: {
		val: -6,
		next: {
			val: -6,
			next: {
				val: -6,
				next: {
					val: -3,
					next: {
						val: 5,
						next: null,
					},
				},
			},
		},
	},
};
l2 = null;
console.log(merge_two_list(l1, l2));
