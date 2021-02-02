function sum(l1, l2) {
	const total = l1.val + l2.val;
	if (l1.next == null && l2.next == null) {
		return total;
	}
	if (total > 9) {
		const next_val = Math.floor(total / 10);
		l2.next.val += next_val;
		return `${total % 10} ${sum(l1.next, l2.next)}`;
	}
	return `${total} ${sum(l1.next, l2.next)}`;
}
function add_two_number(l1, l2) {
	const stack = [];
	let list = null;
	stack.push(...sum(l1, l2).split(' '));
	stack.reverse().map(each_val => {
		list = { val: each_val, next: list };
	});
	return list;
}

let l1 = {
	val: 2,
	next: {
		val: 4,
		next: {
			val: 3,
			next: null,
		},
	},
};

let l2 = {
	val: 5,
	next: {
		val: 6,
		next: {
			val: 4,
			next: null,
		},
	},
};

// console.log(add_two_number(l1, l2));

l1 = {
	val: 0,
	next: null,
};

l2 = {
	val: 0,
	next: null,
};

// console.log(add_two_number(l1, l2));

l1 = {
	val: 9,
	next: {
		val: 9,
		next: {
			val: 9,
			next: {
				val: 9,
				next: {
					val: 9,
					next: {
						val: 9,
						next: {
							val: 9,
							next: null,
						},
					},
				},
			},
		},
	},
};

l2 = {
	val: 9,
	next: {
		val: 9,
		next: {
			val: 9,
			next: {
				val: 9,
				next: null,
			},
		},
	},
};

console.log(add_two_number(l1, l2));
