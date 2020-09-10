// 187 ==> Contact List
// 	Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).
// 		sortContacts([
// 			"John Locke",
// 			"Thomas Aquinas",
// 			"David Hume",
// 			"Rene Descartes"
// 		], "ASC") ➞ [
// 			"Thomas Aquinas",
// 			"Rene Descartes",
// 			"David Hume",
// 			"John Locke"
// 		]
// 		// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)
// 		sortContacts([
// 			"Paul Erdos",
// 			"Leonhard Euler",
// 			"Carl Gauss"
// 		], "DESC") ➞ [
// 			"Carl Gauss",
// 			"Leonhard Euler",
// 			"Paul Erdos"
// 		]
// 		// Gauss (G) > Erdos (ER) > Euler (EU)
// 		sortContacts([], "DESC") ➞ []
// 		sortContacts(null, "DESC") ➞ []
// 		sortContacts(undefined, "DESC") ➞ []
// 		An array with a single name should be trivially returned. An empty array, or an input of null or undefined should return an empty array.
function sortContacts(names, order) {
	return !names ? [] :
		(
			order == "ASC" ?
				(names.sort((a, b) => a.split(' ')[1] < b.split(' ')[1] ? -1 : 1)): 
				(names.sort((a, b) => a.split(' ')[1] < a.split(' ')[1] ? 1 : -1))
		)
}
console.log(sortContacts([
	"John Locke",
	"Thomas Aquinas",
	"David Hume",
	"Rene Descartes"
], "ASC"))
console.log(sortContacts([
	"Paul Erdos",
	"Leonhard Euler",
	"Carl Gauss"
], "DESC"))
console.log(sortContacts([], "DESC"))
console.log(sortContacts(null, "DESC"))
console.log(sortContacts(undefined, "DESC"))

// 188 ==> All Pairs that Sum to Target
// 	Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger]. If no pairs are found, return an empty array []. You are only allowed to use each number once in a pair.
// 		allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]] // 2 + 5 = 7, 3 + 4 = 7
// 		allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]
// 		allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]] // Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

function allPairs(numbers, target) {
	let resultArray = []
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 1 + i; j < numbers.length; j++) {
			numbers[i] + numbers[j] == target ?
				resultArray.push(
					[
						Math.min(numbers[i], numbers[j]),
						Math.max(numbers[j], numbers[i])
					]) : ""
		}
	}
	return resultArray.sort(([a], [b]) => a - b)
}
console.log(allPairs([2, 4, 5, 3], 7))
console.log(allPairs([5, 3, 9, 2, 1], 3))
console.log(allPairs([4, 5, 1, 3, 6, 8], 9))