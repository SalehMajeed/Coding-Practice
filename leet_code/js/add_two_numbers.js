function traverse(l) {
	if (l.next == null) {
		return [l.val];
	}

	return [l.val, traverse(l.next)].flat(Infinity);
}

function add_two_number(l1, l2) {
	const list1 = String(traverse(l1).join(''));
	const list2 = String(traverse(l2).join(''));

	let sum = +list1 + +list2;
	let list = null;

	console.log(+list1 , +list2);

	sum = +[...String(sum)].reverse().join('');

	if (sum == 0) {
		return { val: 0, next: null };
	}

	while (sum != 0) {
		list = { val: sum % 10, next: list };
		sum = parseInt(sum / 10);
	}

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

// console.log(add_two_number(l1, l2));

l1 = {
	val: 2,
	next: {
		val: 4,
		next: {
			val: 9,
			next: null,
		},
	},
};

l2 = {
	val: 5,
	next: {
		val: 6,
		next: {
			val: 4,
			next: {
				val: 9,
				next: null,
			},
		},
	},
};
console.log(add_two_number(l1, l2)); // 70401
