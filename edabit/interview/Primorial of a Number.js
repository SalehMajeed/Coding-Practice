function primorial(n) {
	const arr = [];
	let num = 2;
	while (arr.length < n) {
		if (prime_number(num)) {
			arr.push(num);
		}
		num++;
	}
	return arr.reduce((acc, val) => (acc *= val), 1);
}

function prime_number(n) {
	if (n >= 2) {
		for (let i = 2; i < n; i++) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}
}

console.log(primorial(1));
console.log(primorial(2));
console.log(primorial(6));
