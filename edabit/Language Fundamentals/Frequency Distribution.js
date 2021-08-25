function getFrequencies(arr) {
	const res = {};
	for (let i = 0; i < arr.length; i++) {
		res[arr[i]] = res[arr[i]] + 1 || 1;
	}
	return res;
}

console.log(getFrequencies(['A', 'A']), { A: 2 });
console.log(getFrequencies(['A', 'B', 'A', 'A', 'A']), { A: 4, B: 1 });
console.log(getFrequencies(['A', 'B', 'C', 'A', 'A']), { A: 3, B: 1, C: 1 });
console.log(getFrequencies([true, false, true, false, false]), { true: 2, false: 3 });
console.log(getFrequencies([1, 2, 3, 3, 2]), { 1: 1, 2: 2, 3: 2 });
console.log(getFrequencies([]), {});
