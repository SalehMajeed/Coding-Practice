console.log("158 --->")
// 158 ==>	Is the Sum of Letters Even or Odd?
// 	Create a function that takes a string and returns true if the sum of the index position of every letter is even and false if the sum is odd. Case insensitive. Ignore non-letter symbols. 
// 		isAlpha("i'am king")  ➞ True
// 		// 9 + 1 + 13 + 11 + 9 + 14 + 7 = 64 (even)
// 		isAlpha("True") ➞ True
// 		// 20 + 18 + 21 + 5= 64 (even)
// 		isAlpha("alexa") ➞ false
// 		// 1 + 12 + 5 + 24 + 1= 43 (odd)
function isAlpha(str) {
    return str.toLowerCase().match(/[a-z]/g).reduce((a, b) => a + b.charCodeAt() - 96, 0) % 2 == 0
}
console.log(isAlpha("i'am king"))
console.log(isAlpha("True"))
console.log(isAlpha("alexa"))

console.log("159 --->")
// 159 ==>	Sort By Index of Character
// 	Write a function that sorts an array of characters alphabetically in ascending order (a-z) by the character at the n-th character. All inputs will be of same length.
// 		sortByCharacter(["az16", "by35", "cx24"], 2) ➞ ["cx24", "by35", "az16"]
// 		// By 2nd character: ["x", "y", "z"] is in alphabetical order.
// 		sortByCharacter(["mayor", "apple", "petal"], 5) ➞ ["apple", "petal", "mayor"]
// 		// By 5th character: ["e", "l", "r"] is in alphabetical order.
// 		sortByCharacter(["mate", "team", "bade"], 3) ➞ ["team", "bade", "mate"]
function sortByCharacter(array,number){
    return array.sort((a,b)=>{
    return (a.charCodeAt(number-1)-b.charCodeAt(number-1))
    })
  }
  console.log(sortByCharacter(["az16", "by35", "cx24"], 2))
  console.log(sortByCharacter(["mayor", "apple", "petal"], 5))
  console.log(sortByCharacter(["mate", "team", "bade"], 3))

console.log("160 --->")
// 160 ==>	Good Match?
// 	In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums). If the array has an odd length, one number is (sadly) left out, so you should return "bad match".
// 		isGoodMatch([1, 2, 4, 7]) ➞ [1+2, 4+7] ➞ [3, 11]
// 		isGoodMatch([5, 7, 9, -1, 4, 2]) ➞ [12, 8, 6]
// 		isGoodMatch([5, 7, 9, -1, 4, 2, 3]) ➞ "bad match"
// 		isGoodMatch([2, 6, 7, -2, 4]) ➞ "bad match"
function isGoodMatch(array){
    let result = []
    if(array.length%2 != 0){
      return "Bad match"
    }else{
      for(let i=0; i<array.length; i++){
          result.push(array[i]+array[i+1]) 
      }
    }
    return result
  }
  console.log(isGoodMatch([1, 2, 4, 7]))
  console.log(isGoodMatch([5, 7, 9, -1, 4, 2]))
  console.log(isGoodMatch([5, 7, 9, -1, 4, 2, 3]))
  console.log(isGoodMatch([2, 6, 7, -2, 4]))

console.log("161 --->")
// 161 ==>	Is It the Same Upside Down?
// 	The number 6090609 has a special property: if you turn the number upside down (imagine rotating your screen 180 degrees), you get 6090609 again. Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.
// 		sameUpsidedown("6090609") ➞ true
// 		sameUpsidedown("9669") ➞false // Becomes 6996 when upside down.
// 		sameUpsidedown("69069069") ➞ true
function sameUpsidedown(string){
    let Array = string.split("").reverse()
    return string == Array.map(element=> element==6?9:element==9?6:0).join("")
  }
  console.log(sameUpsidedown("6090609"))
  console.log(sameUpsidedown("9669"))
  console.log(sameUpsidedown("69069069"))