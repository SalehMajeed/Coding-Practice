// 190 ==> Alternate Sort
// Write a function that sorts a given array in an alternative fashion.The result should be a array sorted in ascending order(number then letter).Array will contain equal amounts of integer numbers and single characters.
//     alternateSort(["a", "b", "c", 1, 2, 3]) ➞[1, "a", 2, "b", 3, "c"]
// alternateSort([-2, "f", "A", 0, 100, "z"]) ➞[-2, "A", 0, "f", 100, "z"]
// alternateSort(["X", 15, 12, 18, "Y", "Z"]) ➞[12, "X", 15, "Y", 18, "Z"]

function alternateSort(array) {
    array.sort((a, b) => a < b ? -1 : 1)
    let char_array = [], num_array = []
    for (let i = 0; i < array.length; i++) {
        typeof array[i] != 'string' ? num_array.push(array[i]) : char_array.push(array[i])
    }
    for (let i = 0, j = 0; i < array.length; i++) {
        i % 2 == 0 ? (array[i] = num_array[j]) : (array[i] = char_array[j++])
    }

    return array
}
console.log(alternateSort(["a", "b", "c", 1, 2, 3]))
console.log(alternateSort([-2, "f", "A", 0, 100, "z"]))
console.log(alternateSort(["X", 15, 12, 18, "Y", "Z"]))

// 191 ==> Get Student with Best Test Avg.
// Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average.The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name.You do not need to return their Test Average.
//     getBestStudent({
//         John: [100, 90, 80],
//         Bob: [100, 70, 80]
//     }) ➞ "John"
// // John's avg = 90
// // Bob's avg = 83.33
// getBestStudent({
//     Susan: [67, 84, 75, 63],
//     Mike: [87, 98, 64, 71],
//     Jim: [90, 58, 73, 86]
// }) ➞ "Mike"
// All students in an object will have the same amount of test scores.So no student will have taken more tests than another.
function getBestStudent(object){
    let max_avg = -Infinity
    let max_key
    let individual_avg
    for(let key in object){
      individual_avg = object[key].reduce((total,element)=> total + element)/object[key].length
      if(individual_avg>max_avg){
            max_avg= individual_avg
                  max_key = key
      }
    }
    return max_key
  }
  console.log(getBestStudent({
          John: [100, 90, 80],
          Bob: [100, 70, 80]
      }))
  // John's avg = 90
  // Bob's avg = 83.33
  console.log(getBestStudent({
      Susan: [67, 84, 75, 63],
      Mike: [87, 98, 64, 71],
      Jim: [90, 58, 73, 86]
  }))

// 192 ==> Almost Sorted Sequence
// An almost - sorted sequence is a sequence that is strictly increasing or strictly decreasing if you remove a single element from the array(no more, no less).Write a function that returns true if an array is almost - sorted, and false otherwise.
// For example, if you remove 80 from the first example, it is perfectly sorted in ascending order.Similarly, if you remove 7 from the second example, it is perfectly sorted in descending order.
//     almostSorted([1, 3, 5, 9, 11, 80, 15, 33, 37, 41]) ➞ true
// almostSorted([6, 5, 4, 7, 3]) ➞ true
// almostSorted([6, 4, 2, 0]) ➞ false
// // Sequence is already sorted.
// almostSorted([7, 8, 9, 3, 10, 11, 12, 2]) ➞ false
// // Requires removal of more than 1 item.
// Completely sorted arrays should return false.
// Arrays will always be > 3 in length(to remove ambiguity).
// Numbers in each input array will be unique - don't worry about "ties".