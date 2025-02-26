// 193 ==> Advanced Array Sort
// 	Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.
// 		advancedSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]
// 		advancedSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]
// 		advancedSort(["b", "a", "b", "a", "c"]) ➞ [["b", "b"], ["a", "a"], ["c"]]
// 	The subarrays should be returned in the order of each element's first appearance in the given array.

function advancedSort(array) {
    return [...new Set(array)].
        map(Element=> array.filter(newElement => Element == newElement))
}
console.log(advancedSort([2, 1, 2, 1]))
console.log(advancedSort([5, 4, 5, 5, 4, 3]))
console.log(advancedSort(["b", "a", "b", "a", "c"]))