function smallestTransform(num) {
	let small_num = Number.MAX_VALUE;
	let big_num = 0;
	let new_num = num;
	while (new_num > 0) {
		num = new_num % 10;
		small_num = small_num > num ? num : small_num;
		big_num = big_num > num ? big_num : num;
		new_num = parseInt(new_num / 10);
	}
	const res = big_num - small_num;
	return res == 3 ? 4 : res;
}

console.log(smallestTransform(399), 6);
console.log(smallestTransform(1234), 4);
console.log(smallestTransform(153), 4);
console.log(smallestTransform(33338), 5);
console.log(smallestTransform(7777), 0);
console.log(smallestTransform(977), 2);
console.log(smallestTransform(589), 4);
