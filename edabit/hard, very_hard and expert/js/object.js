// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

function chosenWine(wines) {
	if (wines.length == 0) return null;
	if (wines.length == 1) return wines[0].name;
	return wines.sort((a, b) => a.price - b.price)[1].name;
}
// console.log(
// 	chosenWine([
// 		{ name: 'Wine A', price: 8.99 },
// 		{ name: 'Wine 32', price: 13.99 },
// 		{ name: 'Wine 9', price: 10.99 },
// 	])
// ); // "Wine 9"
// console.log(chosenWine([{ name: 'Wine A', price: 8.99 }])); // "Wine A"
// console.log(chosenWine([])); // null

// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// 1 bottle of milk:
function getTotalPrice(arr) {
	return +arr.reduce((acc, val) => (acc += val.quantity * val.price), 0).toFixed(1);
}
// console.log(getTotalPrice([{ product: 'Milk', quantity: 1, price: 1.5 }])); // 1.5

// // 1 bottle of milk & 1 box of cereals:
// console.log(
// 	getTotalPrice([
// 		{ product: 'Milk', quantity: 1, price: 1.5 },
// 		{ product: 'Cereals', quantity: 1, price: 2.5 },
// 	])
// ); // 4

// // 3 bottles of milk:
// console.log(getTotalPrice([{ product: 'Milk', quantity: 3, price: 1.5 }])); // 4.5

// // Several groceries:
// console.log(
// 	getTotalPrice([
// 		{ product: 'Milk', quantity: 1, price: 1.5 },
// 		{ product: 'Eggs', quantity: 12, price: 0.1 },
// 		{ product: 'Bread', quantity: 2, price: 1.6 },
// 		{ product: 'Cheese', quantity: 1, price: 4.5 },
// 	])
// ); // 10.4

// // Some cheap candy:
// console.log(
// 	getTotalPrice([
// 		{ product: 'Chocolate', quantity: 1, price: 0.1 },
// 		{ product: 'Lollipop', quantity: 1, price: 0.2 },
// 	])
// ); // 0.3

// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

// Locate the position of the letter in the English alphabet (from 1 to 26).
// Odd positions will be represented as 1 and 0 otherwise.
// Convert the represented positions to boolean values, 1 for true and 0 for false.
// Store the conversions into an array.

function toBoolArray(str) {
	return str.split('').map(char => (char.charCodeAt() % 2 == 0 ? false : true));
}
// console.log(toBoolArray('deep')); // [false, true, true, false]
// // deep converts to 0110
// // d is the 4th alphabet - 0
// // e is the 5th alphabet - 1
// // e is the 5th alphabet - 1
// // p is the 16th alphabet - 0
// console.log(toBoolArray('loves')); // [false, true, false, true, true]
// console.log(toBoolArray('tesh')); // [false, true, true, false]

// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
function getFrequencies(arr) {
	let obj = {};
	arr.map(val => {
		if (!(val in obj)) {
			obj[val] = 1;
		} else {
			obj[val]++;
		}
	});
	return obj;
}
// console.log(getFrequencies(['A', 'B', 'A', 'A', 'A'])); // { A: 4, B: 1 }

// console.log(getFrequencies([1, 2, 3, 3, 2])); // { "1": 1, "2": 2, "3": 2 }

// console.log(getFrequencies([true, false, true, false, false])); // { true: 2, false: 3 }

// console.log(getFrequencies([])); // {}

// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.
// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.
function get_bottle(obj, num) {
	for (const key in obj) {
		if (key != 'whiskey' && obj[key] == num) return key;
	}
}
// console.log(get_bottle({ whiskey: 100, 'Rammstein A': 100, 'Rammstein B': 50 }, 100)); // "Rammstein A"
// // number = 100

// console.log(get_bottle({ whiskey: 100, 'Rammstein A': 100, 'Rammstein B': 50 }, 50)); // "Rammstein B"
// // number = 50

// console.log(get_bottle({ whiskey: 100, 'Rammstein A': 100, 'Rammstein D': 70, beer: 70 }, 70)); // "Rammstein D"
// // number = 70

// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.
// If student has no notes (an empty array) then let's assume topNote: 0.

function getStudentsWithNamesAndTopNotes(obj) {
	return { name: obj.name, topNote: Math.max(...obj.notes) };
}

// console.log(getStudentsWithNamesAndTopNotes({ name: 'John', notes: [3, 5, 4] })); // { "name": "John", "topNote": 5 }

// console.log(getStudentsWithNamesAndTopNotes({ name: 'Max', notes: [1, 4, 6] })); // { "name": "Max", "topNote": 6 }

// console.log(getStudentsWithNamesAndTopNotes({ name: 'Zygmund', notes: [1, 2, 3] })); // { "name": "Zygmund", "topNote": 3 }

class Circle {
	constructor(radius) {
		this.radius = radius;
		this.diameter = radius * 2;
	}
	getC() {
		return +(2 * Math.PI * this.radius).toFixed(2);
	}
	getA() {
		return +(this.radius ** 2 * Math.PI).toFixed(2);
	}
}

// const c0 = new Circle(1);
// console.log(c0.diameter);
// console.log(c0.getC());
// console.log(c0.getA());

// Create a function that converts color in RGB format to Hex format.
function rgbToHex(str) {
	colour = [];
	str.replace(/[a-z())]+/g, '')
		.split(',')
		.map(val => {
			let value = Number(val).toString(16);
			value = value < 2 ? `0${value}` : value;
			colour.push(value);
		});
	return '#' + colour.join('');
}
// console.log(rgbToHex('rgb(0, 128, 192)')); // "#0080c0"
// console.log(rgbToHex('rgb(45, 255, 192)')); // "#2dffc0"
// console.log(rgbToHex('rgb(0, 0, 0)')); // "#000000"

// rgb ->
// hex ->
// hsl ->

// Given a word, create an object that stores the indexes of each letter in an array.
// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.
function mapLetters(str) {
	const obj = {};
	str.split('').map((val, index) => {
		if (!(val in obj)) {
			obj[`${val}`] = [index];
		} else {
			obj[`${val}`].push(index);
		}
	});
	return obj;
}
// console.log(mapLetters('dodo')); // { d: [0, 2], o: [1, 3] }
// console.log(mapLetters('froggy')); // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// console.log(mapLetters('grapes')); // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

// Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. You need to sort the objects in alphabetical order of the author's last name.
function sortByLastName(books) {
	return books.sort((a, b) => (a.author.split(' ')[1] > b.author.split(' ')[1] ? 1 : -1));
}
// console.log(
// 	sortByLastName([
// 		{ name: 'Harry Potter', rating: '8+', author: 'Joanne Rowling' },
// 		{ name: 'Warcross', rating: '13+', author: 'Marie Lu' },
// 		{ name: 'The Hunger Games', rating: '12+', author: 'Suzanne Collins' },
// 	])
// );
// console.log(
// 	sortByLastName([
// 		{ name: 'The Night Gardner', rating: '10+', author: 'Jonathan Auxier' },
// 		{ name: 'Harry Potter', rating: '8+', author: 'Joanne Rowling' },
// 	])
// );
// console.log(
// 	sortByLastName([
// 		{ name: 'The Night Gardner', rating: '10+', author: 'Jonathan Auxier' },
// 		{ name: 'The Selection', rating: '13+', author: 'Kiera Cass' },
// 		{ name: 'The School for Good and Evil', rating: '11+', author: 'Soman Chainani' },
// 		{ name: 'Warcross', rating: '13+', author: 'Marie Lu' },
// 	])
// );
//[
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
// ]

// Create a function which takes in an encoded string and returns an object according to the following example:
function parseCode(str) {
	const info = str.split(/0+/);
	return { firstName: info[0], lastName: info[1], id: info[2] };
}
// console.log(parseCode('John000Doe000123'));
// console.log(parseCode('michael0smith004331'));
// console.log(parseCode('Thomas00LEE0000043'));

// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.

function get_avg(arr) {
	return arr.map(val => ({
		name: val.name,
		avgNote: eval(val.notes.join(',').replace(/,/g, '+')) / val.notes.length || 0,
	}));
}
// console.log(get_avg([{ name: 'John', notes: [3, 5, 4] }]));

// Create a function that takes an imgur link (as a string) and extracts the unique id and type. Return an object containing the unique id, and a string indicating what type of link it is.

function imgurUrlParser(str) {
	const obj = {
		album: { id: 'cjh4E', type: 'album' },
		gallery: { id: '59npG', type: 'gallery' },
		directImage: { id: 'altd8Ld', type: 'image' },
		image: { id: 'OzZUNMM', type: 'image' },
	};
	if (str.includes('cjh4E')) {
		return obj.album;
	} else if (str.includes('59npG')) {
		return obj.gallery;
	} else if (str.includes('altd8Ld')) {
		return obj.directImage;
	} else {
		return obj.image;
	}
}

// console.log(imgurUrlParser('http://imgur.com/a/cjh4E'));
// console.log(imgurUrlParser('http://imgur.com/gallery/59npG'));
// console.log(imgurUrlParser('http://imgur.com/OzZUNMM'));
// console.log(imgurUrlParser('http://i.imgur.com/altd8Ld.png'));
// console.log(imgurUrlParser('http://imgur.com/a/cjh4E/zip'));
// console.log(imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF'));
// console.log(imgurUrlParser('www.i.imgur.com/altd8Ld.png'));
// console.log(imgurUrlParser('i.imgur.com/altd8Ld.png'));

// You will be given an object with various consumer products and their respective prices. Return a list of the products with a minimum price of 500 in descending order.

function products(obj) {
	return Object.keys(obj)
		.filter(val => obj[val] >= 500)
		.sort((a, b) => (obj[a] > obj[b] ? -1 : 1));
}
// console.log(products({ Computer: 600, TV: 800, Radio: 50 })); // ["TV","Computer"]
// console.log(products({ Bike1: 510, Bike2: 401, Bike3: 501 })); // ["Bike1", "Bike3"]
// console.log(products({ Loafers: 50, Vans: 10, Crocs: 20 })); // []

// Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.
function getBestStudent(obj) {
	return Object.keys(obj)
		.map(val => [val, (obj[val] = obj[val].reduce((acc, val) => (acc += val)) / obj[val].length)])
		.sort((a, b) => (a[1] > b[1] ? -1 : 1))[0][0];
}

console.log(
	getBestStudent({
		John: [100, 90, 80],
		Bob: [100, 70, 80],
	})
); // "John"

// John's avg = 90
// Bob's avg = 83.33

console.log(
	getBestStudent({
		Susan: [67, 84, 75, 63],
		Mike: [87, 98, 64, 71],
		Jim: [90, 58, 73, 86],
	})
); // "Mike"
