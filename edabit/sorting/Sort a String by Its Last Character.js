function sort_by_last(str) {
	return str
		.split(' ')
		.sort((a, b) => (a[a.length - 1] > b[b.length - 1] ? 1 : -1))
		.join(' ');
}

console.log(sort_by_last('herb camera dynamic'));
console.log(sort_by_last('stab traction artist approach'));
console.log(sort_by_last('sample partner autonomy swallow trend'));
