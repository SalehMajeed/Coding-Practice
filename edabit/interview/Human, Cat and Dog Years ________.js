function calculate_years(humanYears) {
	let catYears = humanYears == 1 ? 15 : humanYears == 2 ? 24 : humanYears * 4 + 16;
	let dogYears = humanYears == 1 ? 15 : humanYears == 2 ? 24 : humanYears * 4 + 14;
	return [humanYears, catYears, dogYears];
}

console.log(calculate_years(1));
console.log(calculate_years(2));
console.log(calculate_years(10));
