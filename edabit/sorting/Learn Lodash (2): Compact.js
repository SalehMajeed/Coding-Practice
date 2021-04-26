function compact(arr) {
	return arr.filter(val => val != false);
}

console.log(compact([0, 1, false, 2, '', 3]));
