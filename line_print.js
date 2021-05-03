function printLines(num) {
	let i = 1;
	let result = '';
	var interval = setInterval(() => {
		i++;
		for (let j = 1; j < i; j++) {
			result += j;
		}
		result += '\n';
		console.log(result);
		result = '';
		if (i > num) {
			clearInterval(interval);
			return result;
		}
	}, 1000);
	return interval;
}

function inner_loop(i, result) {
	for (let j = 1; j <= i; j++) {
		result += j;
	}
	result += '\n';
	console.log(result);
	return result;
}

printLines(5);
// console.log(printLines(3));
