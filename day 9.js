// 83 ==>	Sum of the Odd Numbers
// 	Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
// 		addOddToN(5) ➞ 9
// 		// 1 + 3 + 5 = 9
// 		addOddToN(13) ➞ 49
// 		addOddToN(47) ➞ 576
console.log("83 --->")
function addOddToN(number){
    let total = 0
    // using Recursion
    for( i = 1; i<= number; i++){
        if(i%2){
            total += i
        }
    }
    return total
}
console.log(addOddToN(13))
console.log(addOddToN(47))

// 84 ==>	Halloween Day
// 	Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
// 		halloween("2013/10/31") ➞ "Bonfire toffee"
// 		halloween("2012/07/31") ➞ "toffee"
// 		halloween("2011/10/12") ➞ "toffee"
console.log("84 --->")
function halloween(str){
    let date = new Date(str)
    return (date.getMonth()+1 ==10 && date.getDate() == 31)?"Bonefire toffe":"toffee"
    // var dummy = str.split("/")
    // return (dummy[1] == 10 && dummy[2] == 31)?"Bonfire toffee":"toffee"
}
console.log(halloween("2013/10/31"))
console.log(halloween("2012/07/31"))
console.log(halloween("2011/10/12"))

// 85 ==>	Simple OOP Calculator
// 	Create functions for the Calculator class that can do the following:
// 		Add two numbers.
// 		Subtract two numbers.
// 		Multiply two numbers.
// 		Divide two numbers.
// 		var calculator = new Calculator()
// 		calculator.add(10, 5) ➞ 15
// 		calculator.subtract(10, 5) ➞ 5
// 		calculator.multiply(10, 5) ➞ 50
// 		calculator.divide(10, 5) ➞ 2
// function Calculator(){
// }

// 86 ==>	Limit a Number's Value
// 	Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
// 		If the number falls within the range, the number should be returned.
// 		If the number is less than the lower limit of the range, the lower limit should be returned.
// 		If the number is greater than the upper limit of the range, the upper limit should be returned.
// 		limitNumber(5, 1, 10) ➞ 5
// 		limitNumber(-3, 1, 10) ➞ 1
// 		limitNumber(14, 1, 10) ➞ 10
// 		limitNumber(4.6, 1, 10) ➞ 4.6
console.log("86 --->")
function limitNumber(input, start, end){
    
    // return (input >= start && input <=end)?input:(input <1)?start:end
    
    return (input <= start)?start:(input >= end)?end:input
}
console.log(limitNumber(5, 1, 10))
console.log(limitNumber(-3, 1, 10))
console.log(limitNumber(14, 1, 10))
console.log(limitNumber(4.6, 1, 10))

// 87 ==>	Skip the Drinks with Too Much Sugar
// 	The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
// 	Drinks that contain too much sugar (in this challenge) are:
// 		Cola
// 		Fanta
// 		skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ [water]
// 		skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// 		skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
console.log("87 --->")
function skipTooMuchSugarDrinks(array){
    return array.filter(element => (element != 'cola' && element != 'fanta'))
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]))
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]))
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]))

// 88 ==>	Add a Consecutive List of Numbers
// 	Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
// 		addUpTo(3) ➞ 6
// 		// 1 + 2 + 3 = 6
// 		addUpTo(10) ➞ 55
// 		// 1 + 2 + 3 + ... + 10 = 55
// 		addUpTo(7) ➞ 28
// 		// 1 + 2 + 3 + ... + 7 = 28
console.log("88 --->")
function addUpTo(number){
    // using Recursion
    let total = 0
    for(let i=1; i<=number; i++){
        total += i
    }
    return total
}
console.log(addUpTo(3))
console.log(addUpTo(10))
console.log(addUpTo(7))

// 89 ==>	Check if String Ending Matches Second String
// 	Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
// 		checkEnding("abc", "bc") ➞ true
// 		checkEnding("abc", "d") ➞ false
// 		checkEnding("samurai", "zi") ➞ false
// 		checkEnding("feminine", "nine") ➞ true
// 		checkEnding("convention", "tio") ➞ false
console.log("89 --->")
function checkEnding(str1, str2){
    return str1.endsWith(str2)
}
console.log(checkEnding("abc", "bc"))
console.log(checkEnding("abc", "d"))
console.log(checkEnding("samurai", "zi"))
console.log(checkEnding("feminine", "nine"))
console.log(checkEnding("convention", "tio"))

// 90 ==> Find the Bug: Checking Even Numbers
// 	Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// 	Not a big deal, your friend says. He writes the following code:
// 		function checkAllEven(arr) {
// 			return arr.every(x % 2 === 0)
// 		}
// 	The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
// 		checkAllEven([1, 2, 3, 4]) ➞ false
// 		checkAllEven([2, 4, 6]) ➞ true
// 		checkAllEven([5, 6, 8, 10]) ➞ false
// 		checkAllEven([-2, 2, -2, 2]) ➞ true
console.log("90 --->")
function checkAllEven(arr){
    return arr.every(x => x % 2 === 0)
}
console.log(checkAllEven([1, 2, 3, 4]))
console.log(checkAllEven([2, 4, 6]))
console.log(checkAllEven([5, 6, 8, 10]))
console.log(checkAllEven([-2, 2, -2, 2]))

// 91 ==>	Remove Null from an Array
// 	Create a function to remove all null values from an array.
// 		removeNull(["a", null, "b", null]) ➞ ["a", "b"]
// 		removeNull([null, null, null, null, null]) ➞ []
// 		removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
console.log("91 --->")
function removeNull(array){
    return array.filter(element => element != null)
}
console.log(removeNull(["a", null, "b", null]))
console.log(removeNull([null, null, null, null, null]))
console.log(removeNull([7, 8, null, 9]))

// 92 ==>	True Ones, False Zeros
// 	Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// 		integerBoolean("100101") ➞ [true, false, false, true, false, true]
// 		integerBoolean("10") ➞ [true, false]
// 		integerBoolean("001") ➞ [false, false, true]
console.log("92 --->")
function integerBoolean(str){
    // var dummy = str.split("")
    // return dummy.map(element => Boolean(Number(element)))
    return str.split("").map(element => Boolean(+element))
}
console.log(integerBoolean("100101"))
console.log(integerBoolean("10"))
console.log(integerBoolean("001"))

// 93 ==>	Modifying the Last Character
// 	Create a function which makes the last character of a string repeat n number of times.
// 		modifyLast("Hello", 3) ➞ "Hellooo"
// 		modifyLast("hey", 6) ➞ "heyyyyyy"
// 		modifyLast("excuse me what?", 5) ➞ "excuse me what?????"
function modifyLast(str,number){
    return str + str.substring(str.length-1).repeat(number-1)
}
console.log(modifyLast("Hello", 3))
console.log(modifyLast("hey", 6))
console.log(modifyLast("excuse me what?", 5))