function print_array(number) {
	const newArray = [];

	for (let i = 1; i <= number; i++) {
		newArray.push(i);
	}

	return newArray;
}

console.log(print_array(1));
console.log(print_array(3));
console.log(print_array(6));
