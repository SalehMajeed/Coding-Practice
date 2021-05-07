function num_obj(arr) {
	return arr.map(val => ({ [val]: String.fromCharCode(val) }));
}

console.log(num_obj([118, 117, 120]));
console.log(num_obj([101, 121, 110, 113, 103]));
console.log(num_obj([118, 103, 110]));
