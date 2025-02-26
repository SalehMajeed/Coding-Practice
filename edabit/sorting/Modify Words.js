function edit_words(arr) {
	Array.prototype.add_val = function (position) {
		this.splice(position, 0, '-');
		return this;
	};
	return arr.map(val =>
		val
			.toUpperCase()
			.split('')
			.reverse()
			.add_val(Math.ceil(arr.length / 2))
			.join('')
	);
}

console.log(edit_words(['new york city']));
console.log(edit_words(['null', 'undefined']));
console.log(edit_words(['hello', '', 'world']));
console.log(edit_words(['']));
