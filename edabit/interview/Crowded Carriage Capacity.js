function find_a_seat(n, arr) {
	const percent = n / arr.length;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] / percent) * 100 <= 50) {
			return i;
		}
	}
	return -1;
}

console.log(find_a_seat(200, [35, 23, 18, 10, 40]));
console.log(find_a_seat(20, [3, 5, 4, 2]));
console.log(find_a_seat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]));
console.log(find_a_seat(200, [35, 23, 40, 21, 38]));
