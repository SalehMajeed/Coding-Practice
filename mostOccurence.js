function mostOccur(arr_num, k) {
	const obj = {};
	for (let i = 0; i < arr_num.length; i++) {
		if (arr_num[i] in obj) {
			obj[arr_num[i]] = obj[arr_num[i]] + 1;
		} else {
			obj[arr_num[i]] = 1;
		}
	}

	return Object.keys(obj).sort((a, b) => (obj[a] > obj[b] ? -1 : 1)).slice(0, k);
}

let arr = [3, 1, 4, 4, 5, 2, 6, 1];
console.log(mostOccur(arr, 2));

arr = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9];
console.log(mostOccur(arr, 4));
