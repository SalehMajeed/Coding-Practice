function match_houses(step) {
	return step > 0 ? step * 6 - (step - 1) : 0;
}

console.log(match_houses(1));

console.log(match_houses(4));

console.log(match_houses(87));
