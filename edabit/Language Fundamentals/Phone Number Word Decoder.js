function textToNum(phone) {
	const map = {
		ABC: 2,
		DEF: 3,
		GHI: 4,
		JKL: 5,
		MNO: 6,
		PQRS: 7,
		TUV: 8,
		WXYZ: 9,
	};
	return phone.replace(/[a-z]/gi, function (match) {
		return map[Object.keys(map).find(val => val.includes(match))];
	});
}

console.log(textToNum('123-647-EYES'), '123-647-3937');
console.log(textToNum('(325)444-TEST'), '(325)444-8378');
console.log(textToNum('653-TRY-THIS'), '653-879-8447');
console.log(textToNum('435-224-7613'), '435-224-7613');
console.log(textToNum('(33D)ONT-FAIL'), '(333)668-3245');
console.log(textToNum('(025)445-6741'), '(025)445-6741');
