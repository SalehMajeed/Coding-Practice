function findLetters([...str]) {
	return str.filter(val => str.indexOf(val) == str.lastIndexOf(val));
}

console.log(findLetters('monopoly'));
console.log(findLetters('balloon'));
console.log(findLetters('analysis'));
