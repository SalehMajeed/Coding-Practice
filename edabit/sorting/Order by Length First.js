function make_grlex(arr) {
	return arr.sort((a, b) => (a.length == b.length ? (a > b ? 1 : -1) : a.length > b.length ? 1 : -1));
}

console.log(make_grlex(['small', 'big']));
console.log(make_grlex(['cat', 'ran', 'for', 'the', 'rat']));
console.log(make_grlex(['this', 'is', 'a', 'small', 'test']));
