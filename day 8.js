// 72 ==>	Nth Star Number
// 	Create a function that takes a positive integer and returns the nth "star number".
// 	A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
// 		starNumber(2) ➞ 13
// 		starNumber(3) ➞ 37
// 		starNumber(5) ➞ 121
// console.log("72 --->")
// function starNumber(number){

// }
// console.log(starNumber(2))
// console.log(starNumber(3))
// console.log(starNumber(5))

// 73 ==>	Lowercase, Uppercase or Mixed?
// 	Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// 		getCase("whisper...") ➞ "lower"
// 		getCase("SHOUT!") ➞ "upper"
// 		getCase("Indoor Voice") ➞ "mixed"
console.log("73 --->")
function getCase(str){
    return (
      			(str == str.toLowerCase())?"lower":((str == str.toUpperCase())?"upper":"mixed")
    		)
}
console.log(getCase("whisper..."))
console.log(getCase("SHOUT"))
console.log(getCase("Indoor Voice"))

// 74 ==>	ES6: Destructuring Arrays
// 	You can assign variables from nested arrays like this:
// 		const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
// 		let trans1 = arr[0]
// 		let trans2 = arr[1]
// 		let trans3 = arr[2][0]
// 		let trans4 = arr[2][1][0]
// 		console.log(trans1) // outputs "cars"
// 		console.log(trans2) // outputs "planes"
// 		console.log(trans3) // outputs "trains"
// 		console.log(trans4) // outputs "motorcycles"
// 	With ES6, you can assign variables from arrays in a much more succint way. Use Array Destructuring to assign variables
console.log("74 --->")
//  using flat --->        
// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
// var [trans1, trans2, trans3, trans4] = arr.flat(4)

var [trans1, trans2, [trans3, [trans4]]] = ["cars", "planes", ["trains", ["motorcycles"]]]
		console.log(trans1)
		console.log(trans2)
		console.log(trans3)
        console.log(trans4)


// 75 ==>	The 3 Programmers Problem
// 	You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.
// 		programmers(147, 33, 526) ➞ 493
// 		programmers(33, 72, 74) ➞ 41
// 		programmers(1, 5, 9) ➞ 8
console.log("75 --->")
// using sort method
// function programmers(...numbers){
//     numbers.sort()
//     var lower = numbers[0] , higher = numbers[numbers.length-1];
//     return (higher - lower)
//   }
//   console.log(programmers(147, 33, 526))
//   console.log(programmers(33, 72, 74))
//   console.log(programmers(1, 5, 9))
// using Math
// function programmers(...numbers){
//     var higher = Math.max(...numbers), lower = Math.min(...numbers)
//   return (higher - lower)
// }
// console.log(programmers(147, 33, 526))
// console.log(programmers(33, 72, 74))
// console.log(programmers(1, 5, 9))
function programmers(...numbers){
    var higher=-Infinity,lower=Infinity;
    for(let i=0; i<numbers.length; i++){
        if(higher < numbers[i]){
          higher = numbers[i]
        }
      if(lower > numbers[i]){
        lower = numbers[i]
      }
    }
  return (higher - lower)
}
console.log(programmers(147, 33, 526))
console.log(programmers(33, 72, 74))
console.log(programmers(1, 5, 9))

// 76 ==>	Get the Sum of All Array Elements
// 	Create a function that takes an array and returns the sum of all numbers in the array.
// 		getSumOfItems([2, 7, 4]) ➞ 13
// 		getSumOfItems([45, 3, 0]) ➞ 48
// 		getSumOfItems([-2, 84, 23]) ➞ 105
console.log("76 --->")
// function getSumOfItems(array){
// 	let total=0
//   array.forEach(value => total += value)    
//   return total
// }

// function getSumOfItems(array){
// 	let total=0
//   for(let sum of array){
//     total += sum
//   }    
//   return total
// }
function getSumOfItems(array){
	let sum=0
  for(let i=0; i<array.length; i++){
    sum += array[i]
  }    
  return sum
}
console.log(getSumOfItems([2, 7, 4]))
console.log(getSumOfItems([45, 3, 0]))
console.log(getSumOfItems([-2, 84, 23]))

// 77 ==>	Spaces Between Each Character
// 	Create a function that takes a string and returns a string with spaces in between all of the characters.
// 		spaceMeOut("space") ➞ "s p a c e"
// 		spaceMeOut("far out") ➞ "f a r  o u t"
// 		spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"
console.log("77 --->")
function spaceMeOut(str){
    //return Array.from(str).join(" ")
    //return [...str].join(" ")
    return str.split("").join(" ")
  }
  console.log(spaceMeOut("space"))
  console.log(spaceMeOut("far out"))
  console.log(spaceMeOut("elongated musk"))

//   78 ==>	Raucous Applause
// 	After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound. An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps). Given a string of what the overlapping claps sounded like, return how many claps were made in total.
// 		countClaps("ClaClaClaClap!") ➞ 4
// 		countClaps("ClClClaClaClaClap!") ➞ 6
// 		countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9
console.log("78 --->")
function countClaps(str){
    return (str.split("C").length-1)
}
console.log(countClaps("ClaClaClaClap!"))
console.log(countClaps("ClClClaClaClaClap!"))
console.log(countClaps("CCClaClClap!Clap!ClClClap!"))

// 79 ==>	Filter Strings from Array
// 	Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// 		filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// 		filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]) ➞ [0, 1729]
// 		filterArray(["Nothing", "here"]) ➞ []
console.log("79 --->")
function filterArray(array){
    var toArrayReturn = []
    for(let i=0; i<array.length; i++){
      if(typeof array[i] == "number"){
         toArrayReturn.push(array[i])
      }
    }
    //return array.filter((ele) => typeof ele == "number");
  }
  console.log(filterArray([1, 2, 3, "a", "b", 4]))
  console.log(filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]))
  console.log(filterArray(["Nothing", "here"]))

//   80 ==>	Summing the Squares
//   Create a function where given the number n, return the sum of all square numbers up to and including n.
//       squaresSum(3) ➞ 14
//       // 1² + 2² + 3² =
//       // 1 + 4 + 9 =
//       // 14 
//       squaresSum(3) ➞ 14
//       squaresSum(12) ➞ 650
//       squaresSum(13) ➞ 819 
console.log("80 --->")
  // using recursion
function squaresSum(number){
    let squares = 0
    for(let i=1; i<=number; i++){
      squares = i * i + squares
    }
    return squares
  }
  console.log(squaresSum(3))
  console.log(squaresSum(12))
  console.log(squaresSum(13))

//   81 ==>	Check if Number is within a Given Range
// 	Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
// 		isInRange(4, { min: 0, max: 5 }) ➞ true
// 		isInRange(4, { min: 4, max: 5 }) ➞ true
// 		isInRange(4, { min: 6, max: 10 }) ➞ false
// 		isInRange(5, { min: 5, max: 5 }) ➞ true
// 	Numbers can be positive or negative, and they may not be integers.
// 	You can assume min <= max is always true.
console.log("81 --->")
function isInRange(number,obj){
	return (number <= obj.max && number >= obj.min)
}
console.log(isInRange(4, { min: 0, max: 5}))
console.log(isInRange(4, { min: 4, max: 5}))
console.log(isInRange(4, { min: 6, max: 10}))
console.log(isInRange(5, { min: 0, max: 5}))

// 82 ==>	Coding Website Score Calculator
// 	Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points. Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.
// 		scoreCalculator(1, 2, 3) ➞ 85
// 		scoreCalculator(1, 0, 10) ➞ 205
// 		scoreCalculator(5, 2, -6) ➞ "invalid"
console.log("82 --->")
// using ternary
function scoreCalculator(easy, medium, hard){
    if(easy < 0 || medium < 0 || hard < 0) {
        return "invalid"
      }
        return (easy * 5 + medium * 10 + hard * 20) 
    }
console.log(scoreCalculator(1, 2, 3))
console.log(scoreCalculator(1, 0, 10))
console.log(scoreCalculator(5, 2, -6))