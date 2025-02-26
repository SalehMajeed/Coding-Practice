function add(n) {
	return m => {
		return n + m;
	};
}

console.log(add(10)(20));
console.log(add(0)(20));
console.log(add(-30)(80));
