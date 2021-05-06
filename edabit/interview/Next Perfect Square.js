function next_square(n) {
	if (Math.sqrt(n) != parseInt(Math.sqrt(n))) {
		return null;
	} else {
		return (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
	}
}

console.log(next_square(121));
console.log(next_square(625));
console.log(next_square(114));
