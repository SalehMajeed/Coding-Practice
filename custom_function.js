Array.prototype.custom_filter = function (callback) {
	for (let i = 0; i < this.length; i++) {
		console.log(this[i]);
		if (!callback(this[i])) {
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

// console.log([1, 2, 3, 4, 5].custom_filter(val => val % 2));

Array.prototype.custom_map = function (callback) {
	for (let i = 0; i < this.length; i++) {
		this[i] = callback(this[i]);
	}
	return this;
};
// console.log([1, 2, 3, 4, 5].custom_map(val => val * 2));

Array.prototype.custom_reduce = function (callback, initial_value) {
	let acc = initial_value;

	if (typeof initial_value == 'undefined') {
		initial_value = this[0];
	}
	for (let i = 0; i < this.length; i++) {
		acc = callback(acc, this[i], i, this);
	}

	return acc;
};
// console.log([1, 2, 3, 4, 5].custom_reduce((acc, val, index, arr) => (acc += val), 0));

const arr = [
	[1, 1, 1, 1],
	[1, 0, 1, 0],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
];

function make_zero(arr) {
	const indexes = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(0) == true) {
			for (let j = 0; j < arr[i].length; j++) {
				if (arr[i][j] == 0) {
					indexes.push(j);
				}
			}
			arr[i].fill(0);
		}
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < indexes.length; j++) {
			arr[i][indexes[j]] = 0;
		}
	}

	return arr;

	// const indexes = [];
	// let is_fill = false;
	// for (let i = 0; i < arr.length; i++) {
	// 	for (let j = 0; j < arr[i].length; j++) {
	// 		if (arr[i][j] == 0) {
	// 			is_fill = true;
	// 			indexes.push(j);
	// 		}
	// 	}

	// 	if (is_fill == true) {
	// 		arr[i].fill(0);
	// 		is_fill = false;
	// 	}
	// }

	// for (let i = 0; i < arr.length; i++) {
	// 	for (let j = 0; j < indexes.length; j++) {
	// 		arr[i][indexes[j]] = 0;
	// 	}
	// }
	// return arr;

	// let position = null;
	// for (let i = 0; i < arr.length; i++) {
	//     if (position == arr[i].indexOf(0)) {
	//         continue;
	//     }

	//     position = arr[i].indexOf(0);

	// 	if (position != -1) {
	// 		arr[i].fill(0);
	// 		if (i > 0) {
	// 			arr[i - 1][position] = 0;
	// 		}
	// 		if (i < arr.length - 1) {
	// 			arr[i + 1][position] = 0;
	// 		}
	// 	}
	// }
	// return arr;
}

console.log(make_zero(arr));
