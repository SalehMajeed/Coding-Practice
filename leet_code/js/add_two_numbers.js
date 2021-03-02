function add_two_number(l1, l2) {
	let i = 0;
	while (l1 && l2) {
		if (i > 500) {
			break;
		}

		i++;

		console.log(l1.val, l2.val);

		if (l1.val == null) {
			l1.val = 0;
		}

		if (l2.val == null) {
			l1.val = 0;
		}

		l1 = l1.next;
		l2 = l2.next;
	}
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
	val: 4,
	next: {
		val: 3,
		next: {
			val: 2,
			next: {
				val: 1,
				next: {
					val: 5,
					next: {
						val: 6,
						next: {
							val: 7,
							next: null,
						},
					},
				},
			},
		},
	},
};

l2 = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: {
				val: 4,
				next: null,
			},
		},
	},
};

console.log(add_two_number(l1, l2));
