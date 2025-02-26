function eq(str) {
	const val = eval(str);
	return val;
}
console.log(eq('1+2'));
console.log(eq('6/(9-7)'));
console.log(eq('3+2-4'));
