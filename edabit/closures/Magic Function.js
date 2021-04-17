const magic = (() => {
	return {
		replace: replace,
		length: length,
		trim: trim,
		normalize: normalize,
		slice: slice,
	};
})();

function replace(str, new_val, old_val) {
	return str.replace(new_val, old_val);
}

function length(str) {
	return str.length;
}

function trim(str) {
	return str.trim();
}

function normalize(str, normalize_form) {
	return str.normalize(normalize_form);
}

function slice(arr, start, edn) {
	return arr.slice(start, edn);
}

console.log(magic.replace('azerty', 'a', 'A'));
console.log(magic.length('hello word'));

console.log(magic.trim('  javascript is awesome  '));
console.log(magic.normalize('éèê', 'NFD'));
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4));
