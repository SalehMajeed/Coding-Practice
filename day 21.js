// 171 ==>	Sort Words by a String
// 	Create a function that sorts words by a given string.
// 		sortByString(["apple", "banana", "cherry", "date"], "dbca") ➞ ["date", "banana", "cherry", "apple"]
// 		sortByString(["small", "big", "medium"], "sazymtb") ➞ ["small", "medium", "big"]
// 		sortByString(["poof", "floof", "loop"], "flatp") ➞ ["floof", "loop", "poof"]
// 	The string may have excess letters (see examples #1 and #2). There will be unique starting letters in each array.
function sortByString(array, string) {
    return array.sort(([a], [b]) => string.indexOf(a) - string.indexOf(b))
}
console.log(sortByString(["apple", "banana", "cherry", "date"], "dbca"))
console.log(sortByString(["small", "big", "medium"], "sazymtb"))
console.log(sortByString(["poof", "floof", "loop"], "flatp"))

// 172 ==>	Sort by Digit Length, then By Number Itself
// 	Write a function that sorts an array of integers by their digit length in descending order, then settles ties by sorting numbers with the same digit length in ascending order.
// 		digitSort([77, 23, 5, 7, 101]) ➞ [101, 23, 77, 5, 7] 
// 		digitSort([1, 5, 9, 2, 789, 563, 444]) ➞ [444, 563, 789, 1, 2, 5, 9]
// 		digitSort([53219, 3772, 564, 32, 1]) ➞ [53219, 3772, 564, 32, 1]
function digitSort(array) {
    return array.sort((a, b) => String(b).length - String(a).length || a - b)
}
console.log(digitSort([77, 23, 5, 7, 101]))
console.log(digitSort([1, 5, 9, 2, 789, 563, 444]))
console.log(digitSort([53219, 3772, 564, 32, 1]))