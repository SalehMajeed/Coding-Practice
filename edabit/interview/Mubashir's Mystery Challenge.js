function mubashir_function(a, b) {
	return +String(a * b).replace(/0/g, '');
}

console.log(mubashir_function(0, 1));
console.log(mubashir_function(1, 2));
console.log(mubashir_function(10, 10));
