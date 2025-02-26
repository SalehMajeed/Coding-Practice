// Keyboard Mistakes
// Character recognition software often makes mistakes when documents(especially old ones written with a typewriter) are digitized.
// Your task is to correct the errors in the digitized text.You only have to handle the following mistakes:
// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
//     Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"
// keyboardMistakes("DUBL1N") ➞ "DUBLIN"
// keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"

function keyboardMistakes(str) {
	return str.replace(/[4501]/gi, function abc(grp) {
		let obj = {
			4: 'A',
			5: 'S',
			0: 'O',
			1: 'I',
		};
		return obj[grp];
	});
}

console.log(keyboardMistakes('MUB45H1R')); // ➞ "MUBASHIR"
console.log(keyboardMistakes('DUBL1N')); // ➞ "DUBLIN"
console.log(keyboardMistakes('51NG4P0RE')); // ➞ "SINGAPORE"

// The Modulus Operator Function
// Create a function that will work as the modulus operator % without using the modulus operator.The modulus operator is a way to determine the remainder of a division operation.Instead of returning the result of the division, the modulo operation returns the whole number remainder.
//     Examples
// mod(5, 2) ➞ 1
// mod(218, 5) ➞ 3
// mod(6, 3) ➞ 0
// Notes
// Don't use the % operator to return the results.

function mod(a, b) {
    let temp = Math.floor(a / b);
    b = temp * b
    return a - b;
}

console.log(mod(5, 2)); // ➞ 1
console.log(mod(218, 5)); // ➞ 3
console.log(mod(6, 3)); // ➞ 0

Array.prototype.myReduce = function get_value(fn, acc = this.shift()) {
	if (this.length == 0) {
		return acc;
	}
	acc = fn(acc, this.shift());
	return this.myReduce(fn, acc);
};

function addtion(acc, currVal) {
	return acc * currVal;
}

let res = [1, 2, 3, 4].myReduce(addtion);
console.log(res);