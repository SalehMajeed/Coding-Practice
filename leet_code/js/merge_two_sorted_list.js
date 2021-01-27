function merge_two_list(l1, l2) {
	const stack = [];
	for (const list1 of l1) {
		stack.push(list1);
	}
	for (const list2 of l2) {
		stack.push(list2);
	}
	return stack.sort((a, b) => (a > b ? 1 : -1));
	return l1.concat(l2).sort((a, b) => (a > b ? 1 : -1));
	return [...l1, ...l2].sort((a, b) => (a > b ? 1 : -1));
}

console.log(merge_two_list([1, 2, 4], [1, 3, 4]));
console.log(merge_two_list([], []));
console.log(merge_two_list([], [0]));
