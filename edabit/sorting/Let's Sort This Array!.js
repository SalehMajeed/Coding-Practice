function asc_des_none(arr, str) {
	if (str == 'Asc') {
		return arr.sort((a, b) => (a > b ? 1 : -1));
	} else if (str == 'Des') {
		return arr.sort((a, b) => (a > b ? -1 : 1));
	} else {
		return arr;
	}
}

console.log(asc_des_none([4, 3, 2, 1], 'Asc'));
console.log(asc_des_none([7, 8, 11, 66], 'Des'));
console.log(asc_des_none([1, 2, 3, 4], 'None'));
