function reversibleInclusiveList(start, end) {
	const res = [];
	const beg = start;
	if (start > end) {
		[start, end] = [end, start];
	}
	for (let i = start; i <= end; i++) {
		res.push(i);
	}
	return beg > start ? res.reverse() : res;
}

console.log(reversibleInclusiveList(1, 5));
console.log(reversibleInclusiveList(2, 8));
console.log(reversibleInclusiveList(10, 20));
console.log(reversibleInclusiveList(24, 17));
