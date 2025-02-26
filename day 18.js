// 162 ==>	Sort a String by Its Last Character
// 	Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.
// 		sortByLast("herb camera dynamic") ➞ "camera herb dynamic"
// 		sortByLast("stab traction artist approach") ➞ "stab approach traction artist"
// 		sortByLast("sample partner autonomy swallow trend") ➞ "trend sample partner swallow autonomy"
// 	Tests consist of lowercase alphabetic characters (a-z) and spaces.
// 	If two words have the same last character, sort by the order they originally appeared.
console.log("162 --->")
function sortByLast(str){
    return str.split(" ").sort((a,b)=> a[a.length-1] < b[b.length-1]?-1:1).join(" ")
  }
  console.log(sortByLast("herb camera dynamic"))
  console.log(sortByLast("stab traction artist approach"))
  console.log(sortByLast("sample partner autonomy swallow trend"))

  console.log("163 --->")
  // 163 ==>	Consecutive Numbers
// 	Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.
// 		cons([5, 1, 4, 3, 2]) ➞ true // Can be re-arranged to form [1, 2, 3, 4, 5]
// 		cons([5, 1, 4, 3, 2, 8]) ➞ false
// 		cons([5, 6, 7, 8, 9, 9]) ➞ false // 9 appears twice
function cons(array){
    array.sort()
    for(let i=1; i<array.length; i++){
      if(array[i] - 1 != array[i-1]){
        return false
      }
    }
        return true
  }
  console.log(cons([5, 1, 4, 3, 2]))
  console.log(cons([5, 1, 4, 3, 2, 8]))
  console.log(cons([5, 6, 7, 8, 9, 9]))