const REGEXP = /\w../g;

const str = 'eta, edu, etc, ele, epa, eye, exe, emf, ete, eon, era';

const validate = REGEXP => {
	if (!/[.]/.test(String(REGEXP))) return () => 'required';
	return function testReg(str) {
		return str.match(REGEXP);
	};
};

const testExp = validate(REGEXP);
console.log(testExp(str));

console.log(testExp(str), 'required', 'You are required to use a . character class in your expression.');
console.log(testExp(str), ['eta', 'edu', 'etc', 'ele', 'epa', 'eye', 'exe', 'emf', 'ete', 'eon', 'era']);
