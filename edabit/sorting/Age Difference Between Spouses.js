
function age_difference(ages) {
	ages.sort((a, b) => (a > b ? -1 : 1));
	return ages[0] - ages[1] == 0 ? 'No age difference between spouses.' : ages[0] - ages[1] + ' year';
}

console.log(age_difference([29, 1, 6, 8, 28]));
console.log(age_difference([43, 86, 49, 86]));
console.log(age_difference([2, 4, 6, 32, 27]));
