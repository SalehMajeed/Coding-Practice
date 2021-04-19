function unrepeated(str) {
	return [...new Set(str)].join('');
}

console.log(unrepeated('hello'));
console.log(unrepeated('aaaaa'));
console.log(unrepeated('WWE!!!'));
console.log(unrepeated('call 911'));
