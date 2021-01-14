function areTrue(a, b) {
	return a == true && b == true ? 'both' : a ? 'first' : b ? 'second' : 'neither';
}
console.log(areTrue(true, true));
console.log(areTrue(true, false));
console.log(areTrue(false, true));
console.log(areTrue(false, false));
