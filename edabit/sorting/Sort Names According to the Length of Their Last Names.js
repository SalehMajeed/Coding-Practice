function last_name_lensort(names) {
	return names.sort(
		(a, b) => a.split(' ')[1].length - b.split(' ')[1].length || a.split(' ')[1].localeCompare(b.split(' ')[1])
	);
}

console.log(
	last_name_lensort(['Jennifer Figueroa', 'Heather Mcgee', 'Amanda Schwartz', 'Nicole Yoder', 'Melissa Hoffman'])
);
