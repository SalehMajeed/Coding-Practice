function name_shuffle(str) {
	const str_arr = str.split(' ');
	return str_arr[1] + ' ' + str_arr[0];
}

console.log(name_shuffle('Donald Trump'));
console.log(name_shuffle("Rosie O'Donnell"));
console.log(name_shuffle('Seymour Butts'));
