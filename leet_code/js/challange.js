// 3:Fizz
// 5:Buzz
// 3 and 5 : FizzBuzz
// else number

// for (let i = 1, three = 3, five = 5; i <= 100; i++) {
// 	let data = '';
// 	if (i - three == 0) {
// 		three += 3;
// 		data = 'Fizz';
// 	}
// 	if (i - five == 0) {
// 		five += 5;
// 		data += 'Buzz';
// 	}
// 	if (data == '') {
// 		console.log(i);
// 	} else {
// 		console.log(data);
// 	}
// }

for (let i = 1, three = 1, five = 1; i <= 100; i++, three++, five++) {
	let data = '';
	if (three == 3) {
		data = 'Fizz';
		three = 0;
	}
	if (five == 5) {
		five = 0;
		data += 'Buzz';
	}
	if (data == '') {
		console.log(i);
	} else {
		console.log(data);
	}
}

// + - => O(n)
// * / => O(n^2)
