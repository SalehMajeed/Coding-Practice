// Create a function that takes three collections of arguments and returns the sum of the product of numbers.
const product = (x1, y1) => (x2, y2) => (x3, y3) => x1 * x2 * x3 + y1 * y2 * y3;
// console.log(product(1, 2)(1, 1)(2, 3));
// console.log(product(10, 2)(5, 0)(2, 3));
// console.log(product(1, 2)(2, 3)(3, 4));
// console.log(product(1, 2)(0, 3)(3, 0));

// Create a function that calls an object property with procedural like style.
const magic = (function () {
	return{
		replace: (string, replace_character, replace_by_character) =>
			string.replace(new RegExp(replace_character, 'g'), replace_by_character),
		length: str => str.length,
		trim: str => str.trim(),
		normalize: (str, form) => str.normalize(form),
		slice: (arr, start, end) => arr.slice(start, end),
	};
})();
console.log(magic.replace('azerty', 'a', 'A')); // "Azerty"
console.log(magic.length('hello word')); // 10
console.log(magic.trim('  javascript is awesome  ')); // "javascript is awesome"
console.log(magic.normalize('éèê', 'NFD')); // e ́  e ̀  e ̂
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4)); // [ 3, 4 ]
