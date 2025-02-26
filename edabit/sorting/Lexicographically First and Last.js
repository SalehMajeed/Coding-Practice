function first_and_last(s) {
	const str_arr = s.split('').sort();
	return [str_arr.join(''), str_arr.reverse().join('')];
}

console.log(first_and_last('marmite'));
console.log(first_and_last('bench'));
console.log(first_and_last('scoop'));
