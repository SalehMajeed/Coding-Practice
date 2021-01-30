var i = 0;
var next_val = 0;
function sum(l1, l2) {
	const total = l1.val + l2.val + next_val;
	if (l1.next == null || l2.next == null) {
		return total;
	}
	if (i == 10) {
		return 'end';
	}
	i++;
	if (total > 9) {
		next_val = Math.floor(total / 10);
		return `${total % 10} ${sum(l1.next, l2.next)}`;
	}
	return `${total} ${sum(l1.next, l2.next)}`;
}
function add_two_number(l1, l2) {
	const stack = [];
	stack.push(...sum(l1, l2).split(' '));
	return stack.reduce((acc, val) => {
		console.log((acc = { val, next: acc }));
	});
}

const l1 = {
	val: 2,
	next: {
		val: 4,
		next: {
			val: 3,
			next: null,
		},
	},
};

const l2 = {
	val: 5,
	next: {
		val: 6,
		next: {
			val: 4,
			next: null,
		},
	},
};

console.log(add_two_number(l1, l2));
