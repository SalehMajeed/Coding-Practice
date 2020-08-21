console.log("139 --->")
// 139 ==>	Sort by String Length
// 	Create a function that returns an array of strings sorted by length in ascending order.
// 		sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// 		sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// 		sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// 		sortByLength([]) ➞ []
// 	Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// 	Return an empty array if the input array is empty (see example #4).
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"])) // ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["apple", "pie", "shortcake"])) // ["pie", "apple", "shortcake"]
console.log(sortByLength(["may", "april", "september", "august"])) // ["may", "april", "august", "september"]
console.log(sortByLength([])) // []

console.log("140 --->")
// 140 ==>	Find the Largest Numbers in a Group of Arrays
// 	Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// 		findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// 		findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
// 		findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
function findLargestNums(array) {
    let largest = []
    for (let i = 0; i < array.length; i++) {
        largest.push(Math.max(...array[i]))
    }
    return largest
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]))

console.log("141 --->")
// 141 ==>	Sort Numbers in Ascending Order
// 	Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// 		- Sort numbers array in ascending order.
// 		- If the function's argument is null, an empty array, or undefined; return an empty array.
// 		- Return a new array of sorted numbers.
// 		sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
// 		sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
// 		sortNumsAscending(null) ➞ []
// 		sortNumsAscending([]) ➞ []
function sortNumsAscending(array) {
    return array == null ? [] : array.sort()
}
console.log(sortNumsAscending([1, 2, 10, 50, 5]))
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]))
console.log(sortNumsAscending(null))
console.log(sortNumsAscending([]))

console.log("142 --->")
// 142 ==>	Most Left Digit
// 	Write a function that takes a string as an argument and returns the left most digit in the string.
// 		leftDigit("TrAdE2W1n95!") ➞ 2
// 		leftDigit("V3r1ta$") ➞ 3
// 		leftDigit("U//DertHe1nflu3nC3") ➞ 1
// 		leftDigit("J@v@5cR1PT") ➞ 5
function leftDigit(string) {
    string = Array.from(string)
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            return string[i]
        }
    }
}
console.log(leftDigit("TrAdE2W1n95!"))
console.log(leftDigit("V3r1ta$"))
console.log(leftDigit("U//DertHe1nflu3nC3"))
console.log(leftDigit("J@v@5cR1PT"))

console.log("143 --->")
// 143 ==> Sort Numbers in Descending Order
// 	Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.
// 		sortDescending(123) ➞ 321
// 		sortDescending(1254859723) ➞ 9875543221
// 		sortDescending(73065) ➞ 76530
function sortDescending(number) {
    return +(String(number).split("").sort((a, b) => b - a).join(""))
}
console.log(sortDescending(123))
console.log(sortDescending(1254859723))
console.log(sortDescending(73065))

console.log("144 --->")
// 144 ==>	Sort an Array by String Length
// 	Create a function that takes an array of strings and return an array, sorted from shortest to longest.
// 		sortByLength(["Google", "Apple", "Microsoft"]) ➞ ["Apple", "Google", "Microsoft"]
// 		sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]) ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// 		sortByLength(["Turing", "Einstein", "Jung"]) ➞ ["Jung", "Turing", "Einstein"]
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
}
console.log(sortByLength(["Google", "Apple", "Microsoft"]))
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
console.log(sortByLength(["Turing", "Einstein", "Jung"]))

console.log("145 --->")

console.log("146 --->")