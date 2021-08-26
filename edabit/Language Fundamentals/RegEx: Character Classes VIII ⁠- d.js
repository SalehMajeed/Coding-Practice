const REGEXP = /\d+.+?\./g;

const str = '123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St.';

const validate = REGEXP => {
	if (!/\\d/.test(String(REGEXP))) return () => 'required';
	return function testReg(str) {
		return str.match(REGEXP);
	};
};

const testExp = validate(REGEXP);
console.log(testExp(str));

console.log(testExp(str), 'required', 'You are required to use a d character class in your expression.');
console.log(testExp(str), ['123 Redding Dr.', '1560 Knoxville Ave.', '3030 Norwalk Dr.', '5 South St.']);
