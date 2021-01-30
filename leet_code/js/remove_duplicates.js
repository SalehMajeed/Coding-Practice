function remove(arr) {
	// approach 1 -> slow
	// for (let i = 1; i < arr.length; i++) {
	// 	if (arr[i - 1] == arr[i]) {
	// 		arr.splice(i, 1);
	// 		i--;
	// 	}
	// }
	// return arr.length;

	// approach 2 ->
	// let pointer1 = 0;
	// for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
	// 	if (arr[pointer1] != arr[pointer2]) {
	// 		pointer1++;
	// 		arr[pointer1] = arr[pointer2];
	// 	}
	// }
	// return pointer1 + 1;

	// approach 3 ->
	let count = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] != arr[i]) {
            count++;
		}
	}
	return count;
}

console.log(remove([1, 1, 2]));
console.log(remove([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
