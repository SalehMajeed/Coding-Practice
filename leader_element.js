const arr = [16, 17, 4, 3, 5, 2];
function leader(arr) {
	const res = [];
	let previous = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (previous < arr[i]) {
			previous = arr[i];
			res.push(previous);
		}
	}
	return res;
}
console.log(leader(arr));
