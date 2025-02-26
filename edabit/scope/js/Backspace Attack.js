function erase(s) {
	let str = [];
	for (let i = 0; i < s.length; i++) {
		s[i] != '#' ? str.push(s[i]) : str.pop();
	}
	return str.join('');
}

console.log(erase('he##l#hel#llo'));
console.log(erase('major# spar##ks'));
console.log(erase('si###t boy'));
console.log(erase('####'));
