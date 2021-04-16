function add_suffix(suffix) {
	return str => str + suffix;
}

add_ly = add_suffix('ly');

console.log(add_ly('hopeless'));
console.log(add_ly('total'));

add_less = add_suffix('less');

console.log(add_less('fear'));
console.log(add_less('ruth'));
