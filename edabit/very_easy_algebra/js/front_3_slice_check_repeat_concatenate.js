function frontThree(str) {
	return 3 > str.length ? str : str.slice(0, 3).repeat(3);
}
console.log(frontThree('Python'));
console.log(frontThree('Cucumber'));
console.log(frontThree('bioshock'));
