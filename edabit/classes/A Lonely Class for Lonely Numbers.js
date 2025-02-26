class Lonely {
	static record(lo, hi) {
		const prime = [];
		for (let i = lo; i < hi; i++) {
			if (is_prime(i)) {
				prime.push(i);
			}
		}
		return prime;
		return { number: 0, distance: 0, closet: 0 };
	}
}

function is_prime(val) {
	for (let i = 2; i < val; i++) {
		if (val % i == 0) {
			return false;
		}
	}
	return val > 1;
}

console.log(Lonely.record(0, 3));
console.log(Lonely.record(5, 10));
console.log(Lonely.record(19, 24));
