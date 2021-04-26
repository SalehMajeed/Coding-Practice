function zip_it(women, men) {
	if (women.length != men.length) {
		return "sizes don't match";
	} else {
		const match = [];
		for (let i = 0; i < women.length; i++) {
			match.push([women[i], men[i]]);
		}
		return match;
	}
}

console.log(zip_it(['Elise', 'Mary'], ['John', 'Rick']));
console.log(zip_it(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh']));
console.log(zip_it(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim']));
