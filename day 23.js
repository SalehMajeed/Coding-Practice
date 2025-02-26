// 176 ==> Encoded String Parse
// 	Create a function which takes in an encoded string and returns an object according to the following example:
// 		parseCode("John000Doe000123") ➞ {
// 			firstName: "John",
// 			lastName: "Doe",
// 			id: "123"
// 		}
// 		parseCode("michael0smith004331") ➞ {
// 			firstName: "michael",
// 			lastName: "smith",
// 			id: "4331"
// 		}
// 		parseCode("Thomas00LEE0000043") ➞ {
// 			firstName: "Thomas",
// 			lastName: "LEE",
// 			id: "43"
// 		}
// 	The string will always be in the same format, first name, last name and id with zeros between them. id numbers will not contain any zeros. Try solving this without RegEx.
function parseCode(string){
    let [firstName, lastName, id] = string.split("0").filter(String)
    return {firstName, lastName, id}
  }
  console.log(parseCode("John000Doe000123"))
  console.log(parseCode("michael0smith004331"))
  console.log(parseCode("Thomas00LEE0000043"))

// 177 ==>	Sort Odds Keeping Evens in Place
// 	Write a function that sorts only the odd numbers in an array in ascending order, keeping the even numbers in their current place.
// 	For example, if our input array is: [5, 2, 6, 6, 1, 4, 9, 3]:
// 		[_, 2, 6, 6, _, 4, _, _]  // keep evens in place.
// 		// Sort odds: [5, 1, 9, 3] => [1, 3, 5, 9]
// 		[1, 2, 6, 6, 3, 4, 5, 9]  // final array.
// 		oddSort([7, 5, 2, 3, 1]) ➞ [1, 3, 2, 5, 7]
// 		oddSort([3, 7, 0, 9, 3, 2, 4, 8]) ➞ [3, 3, 0, 7, 9, 2, 4, 8]
// 		oddSort([2, 2, 8, 4]) ➞ [2, 2, 8, 4]
// 		oddSort([7, 9, 7]) ➞ [7, 7, 9]
// 	Arrays may contain duplicate numbers.
function oddSort(array, i=0){
    let oddNumbers = array.filter(number => number%2).sort((a,b)=> a - b)
    return array.map(number=>number%2?oddNumbers[i++]:number)
  }
  console.log(oddSort([7, 5, 2, 3, 1]))
  console.log(oddSort([3, 7, 0, 9, 3, 2, 4, 8]))
  console.log(oddSort([2, 2, 8, 4]))
  console.log(oddSort([7, 9, 7]))

  // 178 ==>	Sort Positives, Keep Negatives
// 	Write a function that sorts the positive numbers in ascending order, and keeps the negative numbers untouched.
// 		posNegSort([6, 3, -2, 5, -8, 2, -2]) ➞ [2, 3, -2, 5, -8, 6, -2]
// 		posNegSort([6, 5, 4, -1, 3, 2, -1, 1]) ➞ [1, 2, 3, -1, 4, 5, -1, 6]
// 		posNegSort([-5, -5, -5, -5, 7, -5]) ➞ [-5, -5, -5, -5, 7, -5]
// 		posNegSort([]) ➞ []
// 	If given an empty array, you should return an empty array.
// 	Integers will always be either positive or negative (0 isn't included in the tests).
function posNegSort(array, i = 0){
    let positiveNumbers = array.filter(number=> number>0).sort((a,b) => a - b)
    return array.map(element=> element<0?element:positiveNumbers[i++])
  }
  console.log(posNegSort([6, 3, -2, 5, -8, 2, -2]))
  console.log(posNegSort([6, 5, 4, -1, 3, 2, -1, 1]))
  console.log(posNegSort([-5, -5, -5, -5, 7, -5]))
  console.log(posNegSort([]))

//  179 ==> Burrows-Wheeler Transform
// 	Burrows-Wheeler transform (BWT) is an algorithm which is used in data compression. Given a string text, BWT of text is a modified version of the string with same length as text. It can then be used to efficiently find substrings of text (which won't be covered here). We will just find the BWT of text. Consider "$" as the terminator character at the end of every input text.
// 		Build Burrows-Wheeler-Matrix (BWM) containing all rotations of text.
// 		Sort BWM lexicographically ($ < a < b < ... < z).
// 		BWT is the last coloumn of BWM and gets returned.
// 		// Example with text = "banana$"
// 		// BWM (all rotations of text):
// 		banana$
// 		anana$b
// 		nana$ba
// 		ana$ban
// 		na$bana
// 		a$banan
// 		$banana
// 		// BWM sorted lexicographically:
// 		$banana
// 		a$banan
// 		ana$ban
// 		anana$b
// 		banana$
// 		na$bana
// 		nana$ba
// 		// BWT (last coloumn of BWM):
// 		annb$aa
// 		bwTransform("banana$") ➞ "annb$aa"
// 		bwTransform("mississippi$") ➞ "ipssm$pissii"
// 		bwTransform("acccgtttgtttcaatagatccatcaa$") ➞ "aacc$tacgttctaccatcaatatttgg"