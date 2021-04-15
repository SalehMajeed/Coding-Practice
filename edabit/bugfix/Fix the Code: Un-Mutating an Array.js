function change([...x], times) {
	for (let i = 0; i < x.length; i++) {
		let j = 1;
		while (j <= times) {
			if (i >= j && i < x.length - j) {
				x[i]--;
			}
			j++;
		}
	}
	return x;
}
let x = [3, 3, 3, 3, 3, 3, 3];

// What we want:
console.log(change(x, 2));
console.log(change(x, 2));
