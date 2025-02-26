function sort_by_length(arr) {
	return arr.sort((a, b) => (a.length > b.length ? 1 : -1));
}

console.log(sort_by_length(['Google', 'Apple', 'Microsoft']));
console.log(sort_by_length(['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']));
console.log(sort_by_length(['Turing', 'Einstein', 'Jung']));
