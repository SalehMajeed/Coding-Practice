function count_and_say(number) {
	let say = '';
	for (let i = 1, j = 1; i <= number; i++) {
		if (say.includes(j)) {
			say += j;
			j++;
		} else {
			say += j;
			j = 1;
		}
	}
	return say.split('').reverse().join('');
}

console.log(count_and_say(1)); // 1
console.log(count_and_say(4)); // 1211
console.log(count_and_say(3)); // 21
