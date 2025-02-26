function find_bob(names) {
	return names.indexOf('Bob');
}

console.log(find_bob(['Jimmy', 'Layla', 'Bob']));
console.log(find_bob(['Bob', 'Layla', 'Kaitlyn', 'Patricia']));
console.log(find_bob(['Jimmy', 'Layla', 'James']));
