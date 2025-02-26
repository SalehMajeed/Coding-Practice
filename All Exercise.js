console.log("1 --->")
// 1 ==>
//   addition(3, 2) ➞ 5
//   addition(-3, -6) ➞ -9
//   addition(7, 3) ➞ 10
//   addition(‘7’, ‘3’) ➞ 10
//   addition(‘7’, 3) ➞ 10
function addition(x, y) {
    return +x + +y
}
console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, 3))
console.log(addition('7', '3'))
console.log(addition('7', 3))

console.log("2 --->")
// 2 ==>
//   convert(5) ➞ 300
//   convert(3) ➞ 180
//   convert(2) ➞ 120
//   convert(‘2’) ➞ 120
function convert(number) {
    return +number * 60
}

console.log(convert(5))
console.log(convert(3))
console.log(convert(2))
console.log(convert('2'))

console.log("3 --->")
//   3 ==>
//   addition(0) ➞ 1
//   addition(‘9’) ➞ 10
//   addition(‘-3’) ➞ -2
function addition(number) {
    return +number + 1
}
console.log(addition(0))
console.log(addition('9'))
console.log(addition('-3'))

console.log("4 --->")
// 4 ==>
//   giveMeSomething(“is better than nothing”) ➞ “something is better than nothing”
//   giveMeSomething(“Bob Jane”) ➞ “something Bob Jane”
//   giveMeSomething(“something”) ➞ “something something”
function giveMeSomething(string) {
    return `something ${string}`
}
console.log(giveMeSomething("is better than nothing"))
console.log(giveMeSomething("Bob Jane"))
console.log(giveMeSomething("something"))

console.log("5 --->")
// 5 ==>
//   `Area of a Triangle`
//   triArea(3, 2) ➞ 3
//   triArea(7, 4) ➞ 14
//   triArea(10, 10) ➞ 50
function triArea(height, base) {
    return (height * base) / 2
}
console.log(triArea(3, 2))
console.log(triArea(7, 4))
console.log(triArea(10, 10))

console.log("6 --->")
// 6 ==>
//   `Convert Hours into Seconds`
//   howManySeconds(2) ➞ 7200
//   howManySeconds(10) ➞ 36000
//   howManySeconds(24) ➞ 86400
function howManySeconds(hour) {
    return hour * 3600
}
console.log(howManySeconds(2))
console.log(howManySeconds(10))
console.log(howManySeconds(24))

console.log("7 --->")
// 7 ==>
//   getFirstValue([1, 2, 3]) ➞ 1
//   getFirstValue([80, 5, 100]) ➞ 80
//   getFirstValue([-500, 0, 50]) ➞ -500
function getFirstValue(array) {
    return array[0]
}
console.log(getFirstValue([1, 2, 3]))
console.log(getFirstValue([80, 5, 100]))
console.log(getFirstValue([-500, 0, 50]))

console.log("8 --->")
// 8 ==>
//   `Maximum Edge of a Triangle`
//   nextEdge(8, 10) ➞ 17
//   nextEdge(5, 7) ➞ 11
//   nextEdge(9, 2) ➞ 10
function nextEdge(base, height) {
    return base + height - 1
}
console.log(nextEdge(8, 10))
console.log(nextEdge(5, 7))
console.log(nextEdge(9, 2))

console.log("9 --->")
// 9 ==>
//   `Find the Perimeter of a Rectangle`
//   `Create a function that takes length and width and finds the perimeter of a rectangle.`
//   findPerimeter(6, 7) ➞ 26
//   findPerimeter(20, 10) ➞ 60
//   findPerimeter(2, 9) ➞ 22
function findPerimeter(length, width) {
    return (length + width) * 2
}
console.log(findPerimeter(6, 7))
console.log(findPerimeter(20, 10))
console.log(findPerimeter(2, 9))

console.log("10 --->")
// 10 ==>
//   `Return the Remainder from Two Numbers`
//   `There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.`
//   remainder(1, 3) ➞ 1
//   remainder(3, 4) ➞ 3
//   remainder(-9, 45) ➞ -9
//   remainder(5, 5) ➞ 0
function remainder(first, second) {
    return first % second
}
console.log(remainder(1, 3))
console.log(remainder(3, 4))
console.log(remainder(-9, 45))
console.log(remainder(5, 5))

console.log("11 --->")
// 11 ==> Correct the Mistakes
//     squared(5) ➞ 25
//     squared(9) ➞ 81
//     squared(100) ➞ 10000
//     function squaed(b) {
//         return $a*$a;
//     }
function squared(b) {
    return b * b;
}
console.log(squared(5))
console.log(squared(9))
console.log(squared(100))

console.log("12 --->")
// 12 ==> Using the "&&" Operator
//     JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//     Consider a && b:
//         a is checked if it is true or false.
//         If a is false, false is returned.
//         b is checked if it is true or false.
//         If b is false, false is returned.
//         Otherwise, true is returned (as both a and b are therefore true ).
//     The && operator will only return true for true && true.
//     Make a function using the && operator.
//     and(true, false) ➞ false
//     and(true, true) ➞ true
//     and(false, true) ➞ false
//     and(false, false) ➞ false
function and(bool1, bool2) {
    return bool1 && bool2
}
console.log(and(true, false))
console.log(and(true, true))
console.log(and(false, true))
console.log(and(false, false))

console.log("13 --->")
// 13 ==> Is the Number Less than or Equal to Zero?
//     Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//     lessThanOrEqualToZero(5) ➞ false
//     lessThanOrEqualToZero(0) ➞ true
//     lessThanOrEqualToZero(-2) ➞ true
function lessThanOrEqualToZero(number) {
    return number <= 0
}
console.log(lessThanOrEqualToZero(5))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

console.log("14 --->")
// 14 ==> Less Than 100?
//     Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//     lessThan100(22, 15) ➞ true 
//     // 22 + 15 = 37
//     lessThan100(83, 34) ➞ false
//     // 83 + 34 = 117
function lessThan100(number1, number2) {
    return (number1 + number2) < 100
}
console.log(lessThan100(22, 15))
console.log(lessThan100(83, 34))

console.log("15 --->")
// 15 ==> Football Points
//     Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.
//     footballPoints(3, 4, 2) ➞ 13
//     footballPoints(5, 0, 2) ➞ 15
//     footballPoints(0, 0, 1) ➞ 0
function footballPoints(win, draw, loss) {
    return win * 3 + draw
}
console.log(footballPoints(3, 4, 2))
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 1))

console.log("16 --->")
// 16 ==> Are the Numbers Equal?
//     Create a function that returns true when num1 is equal to num2; otherwise return false.
//     isSameNum(4, 8) ➞ false
//     isSameNum(2, 2) ➞  true
//     isSameNum(2, "2") ➞ false
function isSameNum(number1, number2) {
    return number1 === number2
}
console.log(isSameNum(4, 8))
console.log(isSameNum(2, 2))
console.log(isSameNum(2, "2"))

console.log("17 --->")
// 17 ==> Minimal I: If Boolean Then Boolean
//     function isEven(n) {
//         if (n % 2 == 0)
//             return true;
//         else if (n % 2 == 1)
//             return false;
//     }
//     In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.
//     In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:
//         Keep your code clean and readable.
//         While not violating the first principle: get rid of everything superfluous.
//     In order to achieve this you should:
//         Deepen your knowledge of logics.
//         Deepen your understanding of the particular language you're coding with.
//     I would also add: observe and learn from the pros. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.
//     Goal
//     YOUR GOAL is to submit a function as minimalist as possible.
//     Tips
//     Using an if statement in order to return boolean or to set a variable to a boolean is redundant.
//     A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:
//     function legalAge(age) {
//         if (age >= 18) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
//     Notice that age >= 18 will already give us a boolean (true or false). This means that the function can be written in a much simpler and cleaner way:
//     function legalAge(age) {
//         return age >= 18
//     }
function isEven(n) {
    return n % 2 == 0
}
console.log(isEven(3))
console.log(isEven(2))

console.log("18 --->")
// 18 ==> The Farm Problem
//     In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//         chickens = 2 legs
//         cows = 4 legs
//         pigs = 4 legs
//     The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//     animals(2, 3, 5) ➞ 36
//     animals(1, 2, 3) ➞ 22
//     animals(5, 2, 8) ➞ 50
//     Remember that the farmer wants to know the total number of legs and not the total number of animals.
function animals(chickens, cows, pigs) {
    return 2 * chickens + 4 * (cows + pigs)
}
console.log(animals(2, 3, 5))
console.log(animals(1, 2, 3))
console.log(animals(5, 2, 8))

console.log("19 --->")
// 19 ==> Convert Hours and Minutes into Seconds
//     Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
//     convert(1, 3) ➞ 3780
//     convert(2, 0) ➞ 7200
//     convert(0, 0) ➞ 0
function convert(hours, minutes) {
    return 60 * (60 * hours + minutes)
}
console.log(convert(1, 3))
console.log(convert(2, 0))
console.log(convert(0, 0))

console.log("20 --->")
// 20 ==> Equality Check
//     In this challenge, you must verify the equality of two different given parameters: a and b.
//     Both the value and the type of parameters need to be tested in order to have a matching equality. The possible types of the given parameters are:
//         Numbers
//         Strings
//         Booleans (false or true)
//         Special values: undefined, null and NaN
//     checkEquality(1, true) ➞ false
//     // A number and a boolean: their type is different
//     checkEquality(0, "0") ➞ false
//     // A number and a string: their type is different
//     checkEquality(1,  1) ➞ true 
//     // A number and a number: their type and value are equal
function checkEquality(parameter1, parameter2) {
    return parameter1 === parameter2
}
console.log(checkEquality(1, true))
console.log(checkEquality(0, "0"))
console.log(checkEquality(1, 1))

console.log("21 --->")
// 21 ==> Profitable Gamble
//     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//     profitableGamble(0.2, 50, 9) ➞ true
//     profitableGamble(0.9, 1, 2) ➞ false
//     profitableGamble(0.9, 3, 2) ➞ true
//     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.
function profitableGamble(prob, prize, pay) {
    return prob * prize > pay
}
console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
console.log(profitableGamble(0.9, 3, 2))

console.log("22 --->")
// 22 ==> Frames Per Second
//     Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//     frames(1, 1) ➞ 60
//     frames(10, 1) ➞ 600
//     frames(10, 25) ➞ 15000
//     FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
//     Assume the screen produces 60 frames every second.
function frames(minute1, minute2) {
    return 60 * minute1 * minute2
}
console.log(frames(1, 1))
console.log(frames(10, 1))
console.log(frames(10, 25))

console.log("23 --->")
// 23 ==> Drinks Allowed?
//     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//     shouldServeDrinks(17, true) ➞ false
//     shouldServeDrinks(19, false) ➞ true
//     shouldServeDrinks(30, true) ➞ false
//     Return true or false.
//     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.
function shouldServeDrinks(age, isBreak) {
    return age >= 18 && !isBreak
}
console.log(shouldServeDrinks(17, true))
console.log(shouldServeDrinks(19, false))
console.log(shouldServeDrinks(30, true))

console.log("24 --->")
// 24 ==> Is the String Empty?
//     Create a function that returns true if a string is empty and false otherwise.
//     isEmpty("") ➞ true
//     isEmpty(" ") ➞ false
//     isEmpty("a") ➞ false
//     A string containing only whitespaces " " does not count as empty.
function isEmpty(string) {
    return Boolean(!string)
}
console.log(isEmpty(""))
console.log(isEmpty(" "))
console.log(isEmpty("a"))

console.log("25 --->")

// 25 ==> Compare Strings by Count of Characters
//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
//     comp("AB", "CD") ➞ true
//     comp("ABC", "DE") ➞ false
//     comp("hello", "moien khan") ➞ false
function comp(string1, string2) {
    return string1.length == string2.length
}
console.log(comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "moien khan"))

console.log("26 --->")
// 26 ==> Multiple of 100
//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
//     divisible(1) ➞ false
//     divisible(1000) ➞ true
//     divisible(100) ➞ true
function divisible(number) {
    return number % 100 == 0
}
console.log(divisible(1))
console.log(divisible(1000))
console.log(divisible(100))

console.log("27 --->")
// 27 ==> Check if an Integer is Divisible By Five
//     divisibleByFive(5) ➞ true
//     divisibleByFive(-55) ➞ true
//     divisibleByFive(37) ➞ false
function divisibleByFive(number) {
    return number % 5 == 0
}
console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(37))

console.log("28 --->")
// 28 ==> Recursion: Length of a String
//     Write a function that returns the length of a string. Make your function recursive.
//     length("apple") ➞ 5
//     length("make") ➞ 4
//     length("a") ➞ 1
//     length("") ➞ 0
function length(string) {
    if (Boolean(!string)) {
        return 0
    }
    else {
        return length(string.slice(1)) + 1
    }
}
console.log(length("apple"))
console.log(length("make"))
console.log(length("a"))
console.log(length(""))

console.log("29 --->")
// 29 ==> Return a String as an Integer
//     Create a function that takes a string and returns it as an integer.
//     stringInt("6") ➞ 6
//     stringInt("1000") ➞ 1000
//     stringInt("12") ➞ 12
//     All numbers will be whole numbers.
function StringInt(String) {
    return +String
}
console.log(StringInt("6"))
console.log(StringInt("1000"))
console.log(StringInt("12"))

console.log("30 --->")
// 30 ==> Divides Evenly
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
//     dividesEvenly(98, 7) ➞ true
//     # 98/7 = 14
//     dividesEvenly(85, 4) ➞ false
//     # 85/4 = 21.25
//     a will always be greater than or equal to b.
function dividesEvenly(a, b) {
    return a % b == 0
}
console.log(dividesEvenly(98, 7))
console.log(dividesEvenly(85, 4))

console.log("31 --->")
// 31 ==> Movie Theatre Admittance
//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.
//     acceptIntoMovie(14, true) ➞ true
//     acceptIntoMovie(14, false) ➞ false
//     acceptIntoMovie(16, false) ➞ true
//     age is a decimal.
//     isSupervised is a boolean.
function acceptIntoMovie(age, isSupervised) {
    return age >= 15 || isSupervised
}
console.log(acceptIntoMovie(14, true))
console.log(acceptIntoMovie(14, false))
console.log(acceptIntoMovie(16, false))

console.log("32 --->")
// 32 ==> Evaluate an Equation
//     Create a function that evaluates an equation.
//     eq("1+2") ➞ 3
//     eq("6/(9-7)") ➞ 3
//     eq("3+2-4") ➞ 1
function eq(str) {
    return eval(str)
}
console.log(eq("1+2"))
console.log(eq("6/(9-7)"))
console.log(eq("3+2-4"))

console.log("33 --->")
// 33 ==> Concatenate First and Last Name into One String
//     Given two strings, firstName and lastName, return a single string in the format "last, first".
//     concatName("First", "Last") ➞ "Last, First"
//     concatName("John", "Doe") ➞ "Doe, John"
//     concatName("Mary", "Jane") ➞ "Jane, Mary"
function concatName(First, Last) {
    return `${First}, ${Last}`
}
console.log(concatName("First", "Last"))
console.log(concatName("John", "Doe"))
console.log(concatName("Mary", "Jane"))

console.log("34 --->")
// 34 ==> On/Off Switches
//     Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
//     posCom(1) ➞ 2
//     posCom(3) ➞ 8
//     posCom(10) ➞ 1024
function posCom(outcomes) {
    return 2 ** outcomes
}
console.log(posCom(1))
console.log(posCom(3))
console.log(posCom(10))

console.log("35 --->")
// 35 ==> Triangle and Parallelogram Area Finder
//     Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
//     areaShape(2, 3, "triangle") ➞ 3
//     areaShape(8, 6, "parallelogram") ➞ 48
//     areaShape(2.9, 1.3, "parallelogram") ➞ 3.77
//     Area of a triangle is 0.5 * b * h
//     Area of a parallelogram is b * h
//     Assume triangle and parallelogram are the only inputs for shape.
function areaShape(base, height, shape) {
    return (base * height) * (shape == "triangle" ? 0.5 : 1)
}
console.log(areaShape(2, 3, "triangle"))
console.log(areaShape(8, 6, "parallelogram"))
console.log(areaShape(2.9, 1.3, "parallelogram"))

console.log("36 --->")
// 36 ==> Reverse an Array
//     Write a function to reverse an array.
//     reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
//     reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
//     reverse([]) ➞ []
function reverse(array) {
    return array.reverse()
}
console.log(reverse([1, 2, 3, 4]))
console.log(reverse([9, 9, 2, 3, 4]))
console.log(reverse([]))

console.log("37 --->")
// 37 ==> ES6: Destructuring Arrays I
//     You can assign variables from arrays like this:
//         const arr = [1, 2, 3, 4, 5, 6]
//         let a = arr[0]
//         let b = arr[1]
//         console.log(a) // outputs 1
//         console.log(b) // outputs 2
//     With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax
const arr = [1, 2, 3, 4, 5, 6]
let [a, b] = arr
console.log(a)
console.log(b)

console.log("38 --->")
// 38 ==> Using Ternary Operators
//     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
//     yeah_nope(true) ➞ "yeah"
//     yeah_nope(false) ➞ "nope"
function yeah_nope(bool) {
    return bool ? "yeah" : "nope"
}
console.log(yeah_nope(true))
console.log(yeah_nope(false))

console.log("39 --->")
// 39 ==> Convert an Array to a String
//     Create a function that takes an array of numbers or letters and returns a string.
//     arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
//     arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
//     arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
function arrayToString(array) {
    return array.join("")
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]))
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

console.log("40 --->")
// 40 ==> Return the Last Element in an Array
//     Create a function that accepts an array and returns the last item in the array.
//     getLastItem([1, 2, 3]) ➞ 3
//     getLastItem(["cat", "dog", "duck"]) ➞ "duck"
//     getLastItem([true, false, true]) ➞ true
function getLastItem(array) {
    return array.pop()
}
console.log(getLastItem([1, 2, 3]))
console.log(getLastItem(["cat", "dog", "duck"]))
console.log(getLastItem([true, false, true]))

console.log("41 --->")
// 41 ==> Fix the Error: Check Whether a Given Number Is Odd
//     I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.
//     function isOdd(num){
//         ret n % 19 += 123;
//     }
//     isOdd(-5) ➞ true
//     isOdd(25) ➞ true
//     isOdd(0) ➞ false
function isOdd(num) {
    return num % 2 != 0;
}
console.log(isOdd(-5))
console.log(isOdd(25))
console.log(isOdd(0))

console.log("42 --->")
// 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.
//     flipBool(true) ➞ 0
//     flipBool(false) ➞ 1
//     flipBool(1) ➞ 0
//     flipBool(0) ➞ 1
function flipBool(bool) {
    return +!bool
}
console.log(flipBool(true))
console.log(flipBool(false))
console.log(flipBool(1))
console.log(flipBool(0))

console.log("43 --->")
// 43 ==> Kinetic Energy
//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2
//     m is mass in kg
//     v is velocity in m/s
//     kinetic energy in J
//     Return the Kinetic Energy in Joules, given the mass and velocity. round answers to the nearest integer.
//     kineticEnergy(60, 3) ➞ 270
//     kineticEnergy(45, 10) ➞ 2250
//     kineticEnergy(63.5, 7.35) ➞ 1715
function kineticEnergy(mass, velocity) {
    return Math.floor(0.5 * mass * velocity ** 2)
}
console.log(kineticEnergy(60, 3))
console.log(kineticEnergy(45, 10))
console.log(kineticEnergy(63.5, 7.35))

console.log("44 --->")
// 44 ==> Name Greeting!
//     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".
//     helloName("Gerald") ➞ "Hello Gerald!"
//     helloName("Tiffany") ➞ "Hello Tiffany!"
//     helloName("Ed") ➞ "Hello Ed!"
let helloName = name => `Hello ${name}!`
console.log(helloName("Gerald"))
console.log(helloName("Tiffany"))
console.log(helloName("Ed"))

console.log("45 --->")
// 45 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.
//     calculateExponent(5, 5) ➞ 3125
//     calculateExponent(10, 10) ➞ 10000000000
//     calculateExponent(3, 3) ➞ 27
function calculateExponent(base, exponent) {
    return exponent ** base
}
console.log(calculateExponent(5, 5))
console.log(calculateExponent(10, 10))
console.log(calculateExponent(3, 3))

console.log("46 --->")
// 46 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.
//     newWord("apple") ➞ "pple"
//     newWord("cherry") ➞ "herry"
//     newWord("plum") ➞ "lum"
function newWord(word) {
    return word.substring(1)
}
console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log(newWord("plum"))

console.log("47 --->")
// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.
//     concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//     concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//     concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
function concat(array1, array2) {
    return array1.concat(array2)
}
console.log(concat([1, 3, 5], [2, 6, 8]))
console.log(concat([7, 8], [10, 9, 1, 1, 2]))
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

console.log("48 --->")
// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.
//     search([1, 5, 3], 5) ➞ 1
//     search([9, 8, 3], 3) ➞ 2
//     search([1, 2, 3], 4) ➞ -1
//     search(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
function search(array, index) {
    return array.indexOf(index)
}
console.log(search([1, 5, 3], 5))
console.log(search([9, 8, 3], 3))
console.log(search([1, 2, 3], 4))
console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))

console.log("49 --->")
// 49 ==> Number of Stickers
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.
//     howManyStickers(1) ➞ 6
//     howManyStickers(2) ➞ 24
//     howManyStickers(3) ➞ 54
function howManyStickers(n) {
    return 6 * n * n
}
console.log(howManyStickers(1))
console.log(howManyStickers(2))
console.log(howManyStickers(3))

console.log("50 --->")
// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.
//     check([1, 2, 3, 4, 5], 3) ➞ true
//     check([1, 1, 2, 1, 1], 3) ➞ false
//     check([5, 5, 5, 6], 5) ➞ true
//     check([], 5) ➞ false
function check(array, number) {
    return array.includes(number)
}
console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))

console.log("51 --->")
// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.
//     hasSpaces("hello") ➞ false
//     hasSpaces("hello, world") ➞ true
//     hasSpaces(" ") ➞ true
//     hasSpaces("") ➞ false
//     hasSpaces(",./!@#") ➞ false
function hasSpaces(string) {
    return string.split("").includes(" ")
}
console.log(hasSpaces("hello"))
console.log(hasSpaces("hello, world"))
console.log(hasSpaces(" "))
console.log(hasSpaces(""))
console.log(hasSpaces(",./!@#"))

console.log("52 --->")
// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//     getContainer("Bread") ➞ "bag"
//     getContainer("Beer") ➞ "bottle"
//     getContainer("Candy") ➞ "plastic"
//     getContainer("Cheese") ➞ null
function getContainer(container) {
    switch (container.trim("").toLowerCase()) {
        case "Bread".toLowerCase(): return "bag"
            break
        case "Beer".toLowerCase(): return "bottle"
            break
        case "Candy".toLowerCase(): return "plastic"
            break
        default: return null
    }
}
console.log(getContainer("Bread"))
console.log(getContainer("Beer"))
console.log(getContainer("Candy"))
console.log(getContainer("Cheese"))

console.log("53 --->")
// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
//     numberArgs("a", "b", "c") ➞ 3
//     numberArgs(10, 20, 30, 40, 50) ➞ 5
//     numberArgs(x, y) ➞ 2
//     numberArgs() ➞ 0
function numberArgs(...array) {
    return array.length
}
console.log(numberArgs("a", "b", "c"))
console.log(numberArgs(10, 20, 30, 40, 50))
console.log(numberArgs('x', 'y'))
console.log(numberArgs())

console.log("54 --->")
// 54 ==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format: 
//     "X has a population of Y and is situated in Z" 
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).
//         cityFacts({
//             name: "Paris",
//             population: "2,140,526",
//             continent: "Europe"
//         }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286",
//             continent: "Asia"
//         }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286"
//         }) ➞ "Tokyo has a population of 13,929,286"
function cityFacts(obj) {
    return obj.name + " has a population of " + obj.population + (obj.continent ? " and is situated in " + obj.continent : "")
}
console.log(cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe" }))
console.log(cityFacts({ name: "Tokyo", population: "13,929,286", continent: "Asia" }))
console.log(cityFacts({ name: "Tokyo", population: "13,929,286" }))

console.log("55 --->")
// 55 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//         volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//         volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//         volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
//     Volume is length * width * height.

function volumeOfBox(obj) {
    return obj.length * obj.width * obj.height
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))

console.log("56 --->")
// 56 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
//         stutter("incredible") ➞ "in... in... incredible?"
//         stutter("enthusiastic") ➞ "en... en... enthusiastic?"
//         stutter("outstanding") ➞ "ou... ou... outstanding?"
function stutter(string) {
    return (string.slice(0, 2) + "... ").repeat(2) + string + "?"
}
console.log(stutter("incredible"))
console.log(stutter("enthusiastic"))
console.log(stutter("outstanding"))

console.log("57 --->")
// 57 ==> Is the Word Singular or Plural?
//     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
//         isPlural("changes") ➞ true
//         isPlural("change") ➞ false
//         isPlural("dudes") ➞ true
//         isPlural("magic") ➞ false
//         This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
function isPlural(word) {
    return word.slice(word.length - 1) == "s"
}
console.log(isPlural("changes"))
console.log(isPlural("change"))
console.log(isPlural("dudes"))
console.log(isPlural("magic"))

console.log("58 --->")
// 58 ==> Four Passengers and a Driver
//     A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
//         carsNeeded(5) ➞ 1
//         carsNeeded(11) ➞ 3
//         carsNeeded(0) ➞ 0
function carsNeeded(numberOfPeople) {
    return Math.ceil(numberOfPeople / 5)
}
console.log(carsNeeded(5))
console.log(carsNeeded(11))
console.log(carsNeeded(0))

console.log("59 --->")
// 59 ==> ES6: Destructuring Arrays IV
//     There is an easy way to assign to array values to the nth index by using the Rest element.
//         var [head, tail] = [1, 2, 3, 4]
//         console.log(head) // outputs  1
//         console.log(tail) // outputs 2
//     But how could I make tail = [2, 3, 4] instead of tail = 2?
var [head, ...tail] = [1, 2, 3, 4]
console.log(head)
console.log(tail)

console.log("60 --->")
// 60 ==> ES6: Destructuring Arrays III
//     You can assign variables from arrays with destructuring like this:
//         const arr = ["eyes", "nose", "lips", "ears"]
//         let [eyes, nose, lips, ears] = arr
//     But you can also skip over items in the array being destructured. (takeout only lips)
const arr = ["eyes", "nose", "lips", "ears"]
let [, , lips,] = arr
console.log(lips)

console.log("61 --->")
// 61 ==> ES6: Destructuring Objects III
//         const obj =  { two : 2 }
//         var { one, two } = obj
//         console.log(one) // outputs undefined
//     Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).
const obj = { two: 2 }
var { one = 1, two } = obj
console.log(one)

console.log("62 --->")
// 62 ==> Default Mood
//     Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
//         moodToday("happy") ➞ "Today, I am feeling happy"
//         moodToday("sad") ➞ "Today, I am feeling sad"
//         moodToday() ➞ "Today, I am feeling neutral"
function moodToday(currentMood) {
    return "Today, I am felling " + (currentMood == "happy" ? "happy" : (currentMood == "sad" ? "sad" : "neutral"))
}
console.log(moodToday("happy"))
console.log(moodToday("sad"))
console.log(moodToday())

console.log("63 --->")
// Similar Bread
//    Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//    The lists will always be three elements long. The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.
//        hasSameBread(
//            ["white bread", "lettuce", "white bread"],
//            ["white bread", "tomato", "white bread"]
//        ) ➞ true
//        hasSameBread(
//            ["brown bread", "chicken", "brown bread"],
//            ["white bread", "chicken", "white bread"]
//        ) ➞ false
//        hasSameBread(
//            ["toast", "cheese", "toast"],
//            ["brown bread", "cheese", "toast"]
//        ) ➞ false
function hasSameBread(array1, array2) {
    return array1[0] == array1[array1.length - 1] && array2[0] == array2[array2.length - 1] && array1[0] == array2[0]
}
console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]))
console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]))
console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]))

console.log("64 --->")
// 64 ==> Shapes With N Sides
//     Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
//         Inputs	Outputs
//         1	    "circle"
//         2	    "semi-circle"
//         3	    "triangle"
//         4	    "square"
//         5	    "pentagon"
//         6	    "hexagon"
//         7	    "heptagon"
//         8	    "octagon"
//         9	    "nonagon"
//         10	    "decagon"
//         nSidedShape(3) ➞ "triangle"
//         nSidedShape(1) ➞ "circle"
//         nSidedShape(9) ➞ "nonagon"
//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!
function nSidedShape(number) {
    let shape = ["circle", "semi-circle", "triangle", "square",
        "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"]
    return shape[number - 1]
}
console.log(nSidedShape(3))
console.log(nSidedShape(1))
console.log(nSidedShape(9))

console.log("65 --->")
// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.
//         getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
//         getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
//         getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
function getMultipliedArr(array) {
    return array.map(element => 2 * element)
}
console.log(getMultipliedArr([2, 5, 3]))
console.log(getMultipliedArr([1, 86, -5]))
console.log(getMultipliedArr([5, 382, 0]))

console.log("66 --->")
// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
//         longBurp(3) ➞ "Burrrp"
//         longBurp(5) ➞ "Burrrrrp"
//         longBurp(9) ➞ "Burrrrrrrrrp"
function longBurp(amount) {
    return "Bu" + "r".repeat(amount) + "p"
}
console.log(longBurp(3))
console.log(longBurp(5))
console.log(longBurp(9))

console.log("67 --->")
// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:
//         let { name, email } = { name: "John", email: "john@example.com" }
//         console.log(name)  // "John"
//         console.log(email)  // "john@example.com"
//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
//         let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
//         rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true

let { name, email, ...rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }
console.log(rest)

console.log("68 --->")
// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.
//         ctoa("A") ➞ 65
//         ctoa("m") ➞ 109
//         ctoa("[") ➞ 91
//         ctoa("\") ➞ 92
function ctoa(string) {
    return string.charCodeAt()
}
console.log(ctoa("A"))
console.log(ctoa("m"))
console.log(ctoa("["))
console.log(ctoa("\\"))

console.log("69 --->")
// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
//         totalCups(6) ➞ 7
//         totalCups(12) ➞ 14
//         totalCups(213) ➞ 248
function totalCups(number) {
    return Math.floor(7 * (number / 6))
}
console.log(totalCups(6))
console.log(totalCups(12))
console.log(totalCups(213))

console.log("70 --->")
// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.
//         wordLengths(["hello", "world"]) ➞ [5, 5]
//         wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
//         wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
function wordLengths(words) {
    return words.map(element => element.length)
}
console.log(wordLengths(["hello", "world"]))
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]))
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]))

console.log("71 --->")
// 71 ==> Get the File Name
//     Create a function that returns the selected filename from a path. Include the extension in your answer.
//         getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
//         getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
//         getFilename("ffprobe.exe") ➞ "ffprobe.exe"
function getFilename(string) {
    let rest = string.split("/")
    return rest.slice(rest.length - 1).join()
}
console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"))
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"))
console.log(getFilename("ffprobe.exe"))

console.log("72 --->")

console.log("73 --->")
// 73 ==>	Lowercase, Uppercase or Mixed?
// 	Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// 		getCase("whisper...") ➞ "lower"
// 		getCase("SHOUT!") ➞ "upper"
// 		getCase("Indoor Voice") ➞ "mixed"
function getCase(words) {
    return words == words.toUpperCase() ? "upper" : (words == words.toLowerCase() ? "lower" : "mixed")
}
console.log(getCase("whisper..."))
console.log(getCase("SHOUT!"))
console.log(getCase("Indoor Voice"))

console.log("74 --->")
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
const [trans1, trans2, [trans3, [trans4]]] = ["cars", "planes", ["trains", ["motorcycles"]]]
console.log(trans1)
console.log(trans2)
console.log(trans3)
console.log(trans4)

console.log("75 --->")
// 75 ==>	The 3 Programmers Problem
// 	You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.
// 		programmers(147, 33, 526) ➞ 493
// 		programmers(33, 72, 74) ➞ 41
// 		programmers(1, 5, 9) ➞ 8
function programmers(...array) {
    return array[array.length - 1] - array[0]
}
console.log(programmers(147, 33, 526))
console.log(programmers(33, 72, 74))
console.log(programmers(1, 5, 9))

console.log("76 --->")
// 76 ==>	Get the Sum of All Array Elements
// 	Create a function that takes an array and returns the sum of all numbers in the array.
// 		getSumOfItems([2, 7, 4]) ➞ 13
// 		getSumOfItems([45, 3, 0]) ➞ 48
// 		getSumOfItems([-2, 84, 23]) ➞ 105
function getSumOfItems(array) {
    let i = 0
    array.forEach(v => i += v)
    return i
}
console.log(getSumOfItems([2, 7, 4]))
console.log(getSumOfItems([45, 3, 0]))
console.log(getSumOfItems([-2, 84, 23]))

console.log("77 --->")
// 77 ==>	Spaces Between Each Character
// 	Create a function that takes a string and returns a string with spaces in between all of the characters.
// 		spaceMeOut("space") ➞ "s p a c e"
// 		spaceMeOut("far out") ➞ "f a r  o u t"
// 		spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"
function spaceMeOut(string) {
    return string.split("").join(" ")
}
console.log(spaceMeOut("space"))
console.log(spaceMeOut("far out"))
console.log(spaceMeOut("elongated musk"))

console.log("78 --->")
// 78 ==>	Raucous Applause
// 	After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound. An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps). Given a string of what the overlapping claps sounded like, return how many claps were made in total.
// 		countClaps("ClaClaClaClap!") ➞ 4
// 		countClaps("ClClClaClaClaClap!") ➞ 6
// 		countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9
function countClaps(string) {
    return string.split('C').length - 1
}
console.log(countClaps("ClaClaClaClap!"))
console.log(countClaps("ClClClaClaClaClap!"))
console.log(countClaps("CCClaClClap!Clap!ClClClap!"))

console.log("79 --->")
// 79 ==>	Filter Strings from Array
// 	Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// 		filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// 		filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]) ➞ [0, 1729]
// 		filterArray(["Nothing", "here"]) ➞ []
function filterArray(array) {
    return array.filter(element => Number.isInteger(element))
}
console.log(filterArray([1, 2, 3, "a", "b", 4]))
console.log(filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]))
console.log(filterArray(["Nothing", "here"]))

console.log("80 --->")
// 80 ==>	Summing the Squares
// 	Create a function where given the number n, return the sum of all square numbers up to and including n.
// 		squaresSum(3) ➞ 14
// 		// 1² + 2² + 3² =
// 		// 1 + 4 + 9 =
// 		// 14 
function squaresSum(n) {
    if (n <= 0) {
        return n * n
    }
    return (squaresSum(n - 1) + n * n)
}
console.log(squaresSum(3))
console.log(squaresSum(12))
console.log(squaresSum(13))

console.log("81 --->")
// 81 ==>	Check if Number is within a Given Range
// 	Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
// 		isInRange(4, { min: 0, max: 5 }) ➞ true
// 		isInRange(4, { min: 4, max: 5 }) ➞ true
// 		isInRange(4, { min: 6, max: 10 }) ➞ false
// 		isInRange(5, { min: 5, max: 5 }) ➞ true
// 	Numbers can be positive or negative, and they may not be integers.
// 	You can assume min <= max is always true.
function isInRange(range, obj) {
    return range >= obj.min && range <= obj.max
}
console.log(isInRange(4, { min: 0, max: 5 }))
console.log(isInRange(4, { min: 4, max: 5 }))
console.log(isInRange(4, { min: 6, max: 10 }))
console.log(isInRange(5, { min: 5, max: 5 }))

console.log("82 --->")
// 82 ==>	Coding Website Score Calculator
// 	Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points. Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.
// 		scoreCalculator(1, 2, 3) ➞ 85
// 		scoreCalculator(1, 0, 10) ➞ 205
// 		scoreCalculator(5, 2, -6) ➞ "invalid"
function scoreCalculator(...array) {
    let result = 5 * (array[0] + 2 * array[1] + 4 * array[2])
    return result > 0 ? result : "invalid"
}
console.log(scoreCalculator(1, 2, 3))
console.log(scoreCalculator(1, 0, 10))
console.log(scoreCalculator(5, 2, -6))

console.log("83 --->")
// 83 ==>	Sum of the Odd Numbers
// 	Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
// 		addOddToN(5) ➞ 9
// 		// 1 + 3 + 5 = 9
// 		addOddToN(13) ➞ 49
// 		addOddToN(47) ➞ 576
function addOddToN(n) {
    let i = 0
    if (n == 0) {
        return 0
    }
    else {
        if (n % 2 != 0) {
            i += n
        }
    }
    return (addOddToN(n - 1) + i)
}
console.log(addOddToN(5))
console.log(addOddToN(13))
console.log(addOddToN(47))

console.log("84 --->")
// 84 ==>	Halloween Day
// 	Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
// 		halloween("2013/10/31") ➞ "Bonfire toffee"
// 		halloween("2012/07/31") ➞ "toffee"
// 		halloween("2011/10/12") ➞ "toffee"
function halloween(date) {
    return date.split("/")[1] == 10 && date.split("/")[2] == 31 ? "Bonfire toffee" : "toffee"
}
console.log(halloween("2013/10/31"))
console.log(halloween("2012/07/31"))
console.log(halloween("2011/10/12"))

console.log("85 --->")
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

class Calculator {
    add(n1, n2) {
        return n1 + n2
    }
    subtract(n1, n2) {
        return n1 - n2
    }
    multiply(n1, n2) {
        return n1 * n2
    }
    divide(n1, n2) {
        return n1 / n2
    }
}
var calculator = new Calculator()
console.log(calculator.add(10, 5))
console.log(calculator.subtract(10, 5))
console.log(calculator.multiply(10, 5))
console.log(calculator.divide(10, 5))

console.log("86 --->")
// 86 ==>	Limit a Number's Value
// 	Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
// 		If the number falls within the range, the number should be returned.
// 		If the number is less than the lower limit of the range, the lower limit should be returned.
// 		If the number is greater than the upper limit of the range, the upper limit should be returned.
// 		limitNumber(5, 1, 10) ➞ 5
// 		limitNumber(-3, 1, 10) ➞ 1
// 		limitNumber(14, 1, 10) ➞ 10
// 		limitNumber(4.6, 1, 10) ➞ 4.6
function limitNumber(input, ...additional) {
    return input < additional[0] ? additional[0] : (input > additional[1] ? additional[1] : input)
}
console.log(limitNumber(5, 1, 10))
console.log(limitNumber(-3, 1, 10))
console.log(limitNumber(14, 1, 10))
console.log(limitNumber(4.6, 1, 10))

console.log("87 --->")
// 87 ==>	Skip the Drinks with Too Much Sugar
// 	The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
// 	Drinks that contain too much sugar (in this challenge) are:
// 		Cola
// 		Fanta
// 		skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ [water]
// 		skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// 		skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
function skipTooMuchSugarDrinks(array) {
    return array.filter(element => element != "fanta" && element != "cola" ? element : "")
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]))
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]))
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]))

console.log("88 --->")
// 88 ==>	Add a Consecutive List of Numbers
// 	Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
// 		addUpTo(3) ➞ 6
// 		addUpTo(10) ➞ 55
// 		addUpTo(7) ➞ 28
function addUpTo(number) {
    let i = number
    if (number == 0) {
        return 0
    }
    return addUpTo(number - 1) + i
}
console.log(addUpTo(3))
console.log(addUpTo(10))
console.log(addUpTo(7))

console.log("89 --->")
// 89 ==>	Check if String Ending Matches Second String
// 	Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
// 		checkEnding("abc", "bc") ➞ true
// 		checkEnding("abc", "d") ➞ false
// 		checkEnding("samurai", "zi") ➞ false
// 		checkEnding("feminine", "nine") ➞ true
// 		checkEnding("convention", "tio") ➞ false
function checkEnding(string1, string2) {
    return string1.endsWith(string2)
}
console.log(checkEnding("abc", "bc"))
console.log(checkEnding("abc", "d"))
console.log(checkEnding("samurai", "zi"))
console.log(checkEnding("feminine", "nine"))
console.log(checkEnding("convention", "tio"))

console.log("90 --->")
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
function checkAllEven(arr) {
    return arr.every(x => x % 2 === 0)
}
console.log(checkAllEven([1, 2, 3, 4]))
console.log(checkAllEven([2, 4, 6]))
console.log(checkAllEven([5, 6, 8, 10]))
console.log(checkAllEven([-2, 2, -2, 2]))

console.log("91 --->")
// 91 ==>	Remove Null from an Array
// 	Create a function to remove all null values from an array.
// 		removeNull(["a", null, "b", null]) ➞ ["a", "b"]
// 		removeNull([null, null, null, null, null]) ➞ []
// 		removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
function removeNull(array) {
    return array.filter(element => element != null)
}
console.log(removeNull(["a", null, "b", null]))
console.log(removeNull([null, null, null, null, null]))
console.log(removeNull([7, 8, null, 9]))

console.log("92 --->")
// 92 ==>	True Ones, False Zeros
// 	Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// 		integerBoolean("100101") ➞ [true, false, false, true, false, true]
// 		integerBoolean("10") ➞ [true, false]
// 		integerBoolean("001") ➞ [false, false, true]
function integerBoolean(string) {
    return string.split("").map(element => element != 0 ? Boolean(element) : Boolean(false))
}
console.log(integerBoolean("100101"))
console.log(integerBoolean("10"))
console.log(integerBoolean("001"))

console.log("93 --->")
// 93 ==>	Modifying the Last Character
// 	Create a function which makes the last character of a string repeat n number of times.
// 		modifyLast("Hello", 3) ➞ "Hellooo"
// 		modifyLast("hey", 6) ➞ "heyyyyyy"
// 		modifyLast("excuse me what?", 5) ➞ "excuse me what?????"
function modifyLast(string, number) {
    let rest = string.length - 1
    return string.slice(0, rest) + string.slice(rest).repeat(number)
}
console.log(modifyLast("Hello", 3))
console.log(modifyLast("hey", 6))
console.log(modifyLast("excuse me what?", 5))

console.log("94 --->")
// 94 ==>	Where is Bob!?!
// 	Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
// 		findBob(["Jimmy", "Layla", "Bob"]) ➞ 2
// 		findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
// 		findBob(["Jimmy", "Layla", "James"]) ➞ -1
function findBob(array) {
    return array.indexOf("Bob")
}
console.log(findBob(["Jimmy", "Layla", "Bob"]))
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]))
console.log(findBob(["Jimmy", "Layla", "James"]))

console.log("95 --->")
// 95 ==>	Negate the Array of Numbers
// 	Given an array of numbers, negate all elements contained within.
// 		Negating a positive value -+n will return -n, because all +'s are removed.
// 		Negating a negative value --n will return n, because the first - turns the second minus into a +.
// 		negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
// 		negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
// 		negate([]) ➞ []
function negate(array) {
    return array.map(elements => -elements)
}
console.log(negate([1, 2, 3, 4]))
console.log(negate([-1, 2, -3, 4]))
console.log(negate([]))

console.log("96 --->")
// 96 ==>	Convert Number to String of Dashes
// 	Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
// 		Go(1) ➞ "-"
// 		Go(5) ➞ "-----"
// 		Go(3) ➞ "---"
function Go(number) {
    return number >= 1 && number <= 60 ? "_ ".repeat(number).trim() : ""
}
console.log(Go(1))
console.log(Go(5))
console.log(Go(3))

console.log("97 --->")
// 97 ==>	Word Endings
// 	Create a function that adds a string ending to each member in an array.
// 		addEnding(["clever", "meek", "hurried", "nice"], "ly") ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// 		addEnding(["new", "pander", "scoop"], "er") ➞ ["newer", "panderer", "scooper"]
// 		addEnding(["bend", "sharpen", "mean"], "ing") ➞ ["bending", "sharpening", "meaning"]
function addEnding(array, string) {
    return array.map(element => element + string)
}
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"))
console.log(addEnding(["new", "pander", "scoop"], "er"))
console.log(addEnding(["bend", "sharpen", "mean"], "ing"))

console.log("98 --->")
// 98 ==>	Flip the Boolean
// 	Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
// 		reverse(true) ➞ false
// 		reverse(false) ➞ true
// 		reverse(0) ➞ "boolean expected"
// 		reverse(null) ➞ "boolean expected"
function reverse(bool) {
    return typeof bool == "boolean" ? !bool : "boolean expected"
}
console.log(reverse(true))
console.log(reverse(false))
console.log(reverse(0))
console.log(reverse(null))

console.log("99 --->")
// 99 ==>	Return the Four Letter Strings
// 	Create a function that takes an array of strings and returns the words that are exactly four letters.
// 		isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
// 		isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]
// 		isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
function isFourLetters(array) {
    return array.filter(element => element.length == 4)
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"]))
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]))
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]))

console.log("100 --->")
// 100 ==>	Shuffle the Name
// 	Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.
// 		nameShuffle("Donald Trump") ➞ "Trump Donald"
// 		nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"
// 		nameShuffle("Seymour Butts") ➞ "Butts Seymour"
function nameShuffle(name) {
    return name.split(" ").reverse().join(" ")
}
console.log(nameShuffle("Donald Trump"))
console.log(nameShuffle("Rosie O'Donnell"))
console.log(nameShuffle("Seymour Butts"))

console.log("101 --->")
// 101 ==>	Video Streaming Plans
// 	Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
// 		BasicPlan	StandardPlan	PremiumPlan
// 		✓			✓				✓				canStream
// 		✓			✓				✓				canDownload
// 		✓			✓				✓				hasSD
// 					✓				✓				hasHD
// 									✓				hasUHD
// 		1			2				4				numOfDevices
// 		$8.99		$12.99			$15.99			price
// 		BasicPlan.hasSD ➞ true 
// 		PremiumPlan.hasSD ➞ true
// 		BasicPlan.hasUHD ➞ false
// 		BasicPlan.price ➞ '$8.99'
// 		PremiumPlan.numOfDevices ➞ 4
class BasicPlan {
    canStream = true
    canDownload = true
    hasSD = true
    hasHD = false
    hasUHD = false
    numOfDevices = 1
    price = "$8.99"
}
class StandardPlan extends BasicPlan {
    hasHD = true
    hasUHD = false
    numOfDevices = 2
    price = "$12.99"
}
class PremiumPlan extends StandardPlan {
    hasUHD = true
    numOfDevices = 4
    price = "$15.99"
}
var basicPlan = new BasicPlan()
var premiumPlan = new PremiumPlan()
var standardPlan = new StandardPlan()
console.log(basicPlan.hasSD)
console.log(premiumPlan.hasSD)
console.log(basicPlan.hasUHD)
console.log(basicPlan.price)
console.log(premiumPlan.numOfDevices)

console.log("102 --->")
// 102 ==>	Missing Third Angle
// 	You are given 2 out of 3 angles in a triangle, in degrees.
// 	Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
// 		An acute angle is less than 90 degrees.
// 		A right angle is exactly 90 degrees.
// 		An obtuse angle is greater than 90 degrees (but less than 180 degrees).
// 	For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
// 		missingAngle(27, 59) ➞ "obtuse"
// 		missingAngle(135, 11) ➞ "acute"
// 		missingAngle(45, 45) ➞ "right"
function missingAngle(angle1, angle2) {
    let missing_angle = 180 - (angle1 + angle2)
    return missing_angle < 90 ? "acute" : missing_angle > 90 && missing_angle < 180 ? "obtuse" : "right"
}
console.log(missingAngle(27, 59))
console.log(missingAngle(135, 11))
console.log(missingAngle(45, 45))

console.log("103 --->")
// 103 ==>	Semantic Versioning
// 	In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
// 		The first number is the major version.
// 		The second number is the minor version.
// 		The third number is the patch (bug fixes).
// 	Write three separate functions, one to retrieve each element in the semantic versioning specification.
// 		// 6.1.9
// 		retrieveMajor("6.1.9") ➞ "6"
// 		retrieveMinor("6.1.9") ➞ "1"
// 		retrievePatch("6.1.9") ➞ "9"
// 		// 2.1.0
// 		retrieveMajor("2.1.0") ➞ "2"
// 		retrieveMinor("2.1.0") ➞ "1"
// 		retrievePatch("2.1.0") ➞ "0"
function retrieveMajor(version) {
    return version.split(".")[0]
}
function retrieveMinor(version) {
    return version.split(".")[1]
}
function retrievePatch(version) {
    return version.split(".")[2]
}
console.log(retrieveMajor("6.1.9"))
console.log(retrieveMinor("6.1.9"))
console.log(retrievePatch("6.1.9"))
console.log(retrieveMajor("2.1.0"))
console.log(retrieveMinor("2.1.0"))
console.log(retrievePatch("2.1.0"))

console.log("104 --->")
// 104 ==>	Alphabet Soup
// 	Create a function that takes a string and returns a string with its letters in alphabetical order.
// 		AlphabetSoup("hello") ➞ "ehllo"
// 		AlphabetSoup("edabit") ➞ "abdeit"
// 		AlphabetSoup("hacker") ➞ "acehkr"
// 		AlphabetSoup("geek") ➞ "eegk"
// 		AlphabetSoup("javascript") ➞ "aacijprstv"
function AlphabetSoup(string) {
    return string.split("").sort().join("")
}
console.log(AlphabetSoup("hello"))
console.log(AlphabetSoup("edabit"))
console.log(AlphabetSoup("hacker"))
console.log(AlphabetSoup("geek"))
console.log(AlphabetSoup("javascript"))

console.log("105 --->")
// 105 ==>	Reverse the Order of a String
// 	Create a function that takes a string as its argument and returns the string in reversed order.
// 		reverse("Hello World") ➞ "dlroW olleH"
// 		reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"
// 		reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"
function reverse(string) {
    return string.split("").reverse().join("")
}
console.log(reverse("Hello World"))
console.log(reverse("The quick brown fox."))
console.log(reverse("Edabit is really helpful!"))

console.log("106 --->")
// 106 ==>	Does the Object Contain a Given Key?
// 	Write a function that returns true if a hash contains the specified key, and false otherwise.
// 		hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
// 		hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
// 		hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
function hasKey(obj, key) {
    return obj.hasOwnProperty(key)
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"))
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"))
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"))

console.log("107 --->")
// 107 ==>	Strange Pair
// 	A pair of strings form a strange pair if both of the following are true:
// 		The 1st string's first letter = 2nd string's last letter.
// 		The 1st string's last letter = 2nd string's first letter.
// 	Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
// 		isStrangePair("ratio", "orator") ➞ true
// 		// "ratio" ends with "o" and "orator" starts with "o".
// 		// "ratio" starts with "r" and "orator" ends with "r".
// 		isStrangePair("sparkling", "groups") ➞ true
// 		isStrangePair("bush", "hubris") ➞ false
// 		isStrangePair("", "") ➞ true
function isStrangePair(string1, string2) {
    return string1[0] == string2[string2.length - 1] && string2[0] == string1[string1.length - 1]
}
console.log(isStrangePair("ratio", "orator"))
console.log(isStrangePair("sparkling", "groups"))
console.log(isStrangePair("bush", "hubris"))
console.log(isStrangePair("", ""))

console.log("108 --->")
// 108 ==>	Typing Game	
// 	You're in the midst of creating a typing game.
// 	Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
// 		Inputs:
// 			User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// 			Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
// 		Output: [1, 1, -1, -1, 1]
function TypingGame(userType, correctType) {
    return correctType.map(elements => userType.includes(elements) ? 1 : -1)
}
console.log(TypingGame(["cat", "blue", "skt", "umbrells", "paddy"],
    ["cat", "blue", "sky", "umbrella", "paddy"]))

console.log("109 --->")
// 109 ==>	Repeat the Same Item Multiple Times
// 	Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
// 		repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
// 		repeat(13, 5) ➞ [13, 13, 13, 13, 13]
// 		repeat("7", 2) ➞ ["7", "7"]
// 		repeat(0, 0) ➞ []
function repeat(item, times) {
    return String(item + " ").repeat(times).trim().split(" ")
}
console.log(repeat("edabit", 3))
console.log(repeat(13, 5))
console.log(repeat("7", 2))
console.log(repeat(0, 0))

console.log("110 --->")
// 110 ==>	Remove the First and Last Characters
// 	Create a function that removes the first and last characters from a string.
// 		removeFirstLast("hello") ➞ "ell"
// 		removeFirstLast("maybe") ➞ "ayb"
// 		removeFirstLast("benefit") ➞ "enefi"
// 		removeFirstLast("a") ➞ "a"
// 	If the string is 2 or fewer characters long, return the string itself (See Example #4).
function removeFirstLast(string) {
    return string.length <= 2 ? string : string.slice(1, string.length - 1)
}
console.log(removeFirstLast("hello"))
console.log(removeFirstLast("maybe"))
console.log(removeFirstLast("benefit"))
console.log(removeFirstLast("a"))

console.log("111 --->")
// 111 ==>	Capture the Rook
// 	Write a function that returns true if two rooks can attack each other, and false otherwise.
// 		canCapture(["A8", "E8"]) ➞ true
// 		canCapture(["A1", "B2"]) ➞ false
// 		canCapture(["H4", "H3"]) ➞ true
// 		canCapture(["F5", "C8"]) ➞ false
// 	Assume no blocking pieces.
// 	Two rooks can attack each other if they share the same row (letter) or column (number).
function canCapture([[a, b], [c, d]]) {
    return a == c || b == d
}
console.log(canCapture(["A8", "E8"]))
console.log(canCapture(["A1", "B2"]))
console.log(canCapture(["H4", "H3"]))
console.log(canCapture(["F5", "C8"]))

console.log("112 --->")
// 112 ==>	Palindrome?
// 	A palindrome is a word that is identical forward and backwards.
// 		mom
// 		racecar
// 		kayak
// 	Given a word, create a function that checks whether it is a palindrome.
// 		checkPalindrome("mom") ➞ true
// 		checkPalindrome("scary") ➞ false
// 		checkPalindrome("reviver") ➞ true
// 		checkPalindrome("stressed") ➞ false
function checkPalindrome(word) {
    return word == word.split("").reverse().join("")
}
console.log(checkPalindrome("mom"))
console.log(checkPalindrome("scary"))
console.log(checkPalindrome("reviver"))
console.log(checkPalindrome("stressed"))

console.log("113 --->")
// 113 ==>	Little Dictionary
// 	Create a function that takes in an initial word and filters out an array which contains words that start with the same letters as the initial word.
// 		dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// 		dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// 		dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
// 	If none of the words match, return an empty array.
// 	Keep the filtered array in the same relative order as the original array of words.
function dictionary(initial, word) {
    return word.filter(element => element.startsWith(initial))
}
console.log(dictionary("bu", ["button", "breakfast", "border"]))
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]))
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]))

console.log("114 --->")
// 114 ==>	Calculate the Profit
// 	You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.
// 		profit({
// 			costPrice: 32.67,
// 			sellPrice: 45.00,
// 			inventory: 1200
// 		}) ➞ 14796
// 			profit({
// 			costPrice: 225.89,
// 			sellPrice: 550.00,
// 			inventory: 100
// 		}) ➞ 32411
// 			profit({
// 			costPrice: 2.77,
// 			sellPrice: 7.95,
// 			inventory: 8500
// 		}) ➞ 44030
// 	Assume all inventory has been sold.
// 	Profit = Total Sales - Total Cost
function profit(obj) {
    return obj.inventory * Math.floor((obj.sellPrice - obj.costPrice))
}
console.log(profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
}))
console.log(profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
}))
console.log(profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
}))

console.log("115 --->")
// 115 ==>	Reverse and Capitalize
// 	Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
// 		reverseCapitalize("abc") ➞ "CBA"
// 		reverseCapitalize("hellothere") ➞ "EREHTOLLEH"
// 		reverseCapitalize("input") ➞ "TUPNI"
function reverseCapitalize(String) {
    return String.split("").reverse().join("").toUpperCase()
}
console.log(reverseCapitalize("abc"))
console.log(reverseCapitalize("hellothere"))
console.log(reverseCapitalize("input"))

console.log("116 --->")
// 116 ==>	Exists a Number Higher?
// 	Write a function that returns true if there exists at least one number that is larger than or equal to n.
// 		existsHigher([5, 3, 15, 22, 4], 10) ➞ true
// 		existsHigher([1, 2, 3, 4, 5], 8) ➞ false
// 		existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true
// 		existsHigher([], 5) ➞ false
function existsHigher(array, number) {
    return array.some(element => element >= number)
}
console.log(existsHigher([5, 3, 15, 22, 4], 10))
console.log(existsHigher([1, 2, 3, 4, 5], 8))
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4))
console.log(existsHigher([], 5))

console.log("117 --->")
// 117 ==>	Is the String in Order?
// 	Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.
// 		isInOrder("abc") ➞ true
// 		isInOrder("123") ➞ true
// 		isInOrder("xyzz") ➞ true
function isInOrder(str) {
    return str == str.split("").sort().join("")
}
console.log(isInOrder("abc"))
console.log(isInOrder("123"))
console.log(isInOrder("xyzz"))

console.log("118 --->")
// 118 ==>	Fix the Error: Value vs. Reference Types
// 	Create a function that returns true if two arrays contain identical values, and false otherwise.
// 	To solve this question, your friend writes the following code:
// 		function checkEquals(arr1, arr2) {
// 			if (arr1 === arr2) {
// 				return true
// 			} else {
// 				return false
// 			}
// 		}
// 	But testing the code, you see that something is not quite right. Running the code yields the following results:
// 		checkEquals([1, 2], [1, 3]) ➞ false
// 		// Good so far...
// 		checkEquals([1, 2], [1, 2]) ➞ false
// 		// Yikes! What happened?
// 	Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:
// 		checkEquals([1, 2], [1, 3]) ➞ false
// 		checkEquals([1, 2], [1, 2]) ➞ true
// 		checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
// 		checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
function checkEquals(arr1, arr2) {
    return arr1.every(element => arr2.includes(element))
}
console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 5, 6]))

console.log("119 --->")
// 119 ==>	Fix the Error / Comparing Arrays (Part #2)
// 	Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.
// 	To solve this question, your friend initially wrote the following code:	
// 		function checkEquals(arr1, arr2) {
// 			if (arr1 === arr2) {
// 				return true
// 			} else {
// 				return false
// 			}
// 		}
// 	Your friend did some more research and he fixed the code into the following:
// 		function checkEquals(arr1, arr2) {
// 			if (arr1.join("") === arr2.join("")) {
// 				return true
// 			} else {
// 				return false
// 			}
// 		}
// 	It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?
// 		checkEquals([1, 2], [1, 3]) ➞ false
// 		checkEquals([1, 2], [1, 2]) ➞ true
// 		checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
// 		checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
// 		checkEquals([1, 12], [11, 2]) ➞ false
function checkEquals(arr1, arr2) {
    return arr1.every(element => arr2.includes(element) && arr1.length == arr2.length)
}
console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 5, 6]))
console.log(checkEquals([1, 12], [11, 2]))

console.log("120 --->")
// 120 ==>	Unlucky 13
// 	Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.
// 		unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 		// 182 and 637 are divisible by 13.
// 		unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// 		// No numbers in the array are divisible by 13.
// 		unlucky13([104, 351, 455, 806, 871]) ➞ []
// 		// All numbers in the array are divisible by 13.
function unlucky13(array) {
    return array.filter(element => element % 13 == 0)
}
console.log(unlucky13([53, 182, 435, 591, 637]))
console.log(unlucky13([24, 316, 393, 458, 1279]))
console.log(unlucky13([104, 351, 455, 806, 871]))

console.log("121 --->")
// 121 ==>	Return First and Last Parameter
// 	Write two functions:
// 	1)	firstArg() should return the first parameter passed in.
// 	2)	lastArg() should return the last parameter passed in.
// 	Return undefined if the function takes no parameters.
// 	If the function only takes in one parameter, the firstArg and lastArg functions should return the same value.
// 		firstArg(1, 2, 3) ➞ 1
// 		lastArg(1, 2, 3) ➞ 3
// 		firstArg(8) ➞ 8
// 		lastArg(8) ➞ 8
function firstArg(array) {
    return array
}
function lastArg(...array) {
    return array[array.length - 1]
}
console.log(firstArg(1, 2, 3))
console.log(lastArg(1, 2, 3))
console.log(firstArg(8))
console.log(lastArg(8))

console.log("122 --->")
// 122 ==>	Next Element in Arithmetic Sequence
// 	Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.
// 		nextElement([3, 5, 7, 9]) ➞ 11
// 		nextElement([-5, -6, -7]) ➞ -8
// 		nextElement([2, 2, 2, 2, 2]) ➞ 2
function nextElement(array) {
    return array[array.length - 1] + (array[1] - array[0])
}
console.log(nextElement([3, 5, 7, 9]))
console.log(nextElement([-5, -6, -7]))
console.log(nextElement([2, 2, 2, 2, 2]))

console.log("123 --->")
// 123 ==>	Calculate Determinant of a 2x2 Matrix
// 	Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:
// 		[[a, b], [c, d]]
// 		calcDeterminant([
// 			[1, 2],
// 			[3, 4]
// 		]) ➞ -2
// 		calcDeterminant([
// 			[5, 3],
// 			[3, 1]
// 		]) ➞ -4
// 		calcDeterminant([
// 			[1, 1],
// 			[1, 1]
// 		]) ➞ 0
// 	Matrix will be in 2 * 2 form only.
function calcDeterminant([[a, b], [c, d]]) {
    return a * d - b * c
}
console.log(calcDeterminant([
    [1, 2],
    [3, 4]
]))
console.log(calcDeterminant([
    [5, 3],
    [3, 1]
]))
console.log(calcDeterminant([
    [1, 1],
    [1, 1]
]))

console.log("124 --->")
// 124 ==>	Check Factors
// 	Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
// 		checkFactors([2, 3, 4], 12) ➞ true
// 		// Since 2, 3, and 4 are all factors of 12.
// 		checkFactors([1, 2, 3, 8], 12) ➞ false
// 		// 8 is not a factor of 12.
// 		checkFactors([1, 2, 50], 100) ➞ true
// 		checkFactors([3, 6], 9) ➞ false
function checkFactors(array, number) {
    return array.every(element => number % element == 0)
}
console.log(checkFactors([2, 3, 4], 12))
console.log(checkFactors([1, 2, 3, 8], 12))
console.log(checkFactors([1, 2, 50], 100))
console.log(checkFactors([3, 6], 9))

console.log("125 --->")
// 125 ==>	Reverse Coding Challenge
// 	This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs. Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
// 		[5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]
// 		[9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]
// 		[17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]
// 		[6, 1], 7 ➞ [6, 1]
// 		[3, 2, 9], 3 ➞ [0, 2, 0]
// 		[48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]
function reverse(array, number) {
    return array.map(element => element % number)
}
console.log(reverse([5, 7, 8, 2, 1], 2))
console.log(reverse([9, 8, 16, 47], 4))
console.log(reverse([17, 11, 99, 55, 23, 1], 5))
console.log(reverse([6, 1], 7))
console.log(reverse([3, 2, 9], 3))
console.log(reverse([48, 22, 0, 19, 33, 100], 10))

console.log("126 --->")
// 126 ==>	Generate a Countdown of Numbers in an Array
// 	Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
// 		countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// 		countdown(1) ➞ [1, 0]
// 		countdown(0) ➞ [0]
function countdown(number) {
    let emptyArray = []
    for (let i = number; i >= 0; i--) {
        emptyArray.push(i)
    }
    return emptyArray
}
console.log(countdown(5))
console.log(countdown(1))
console.log(countdown(0))

console.log("127 --->")
// 127 ==>	Between Words
// 	Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.
// 		isBetween("apple", "banana", "azure") ➞ true
// 		isBetween("monk", "monument", "monkey") ➞ true
// 		isBetween("bookend", "boolean", "boost") ➞ false
// 	All letters will be in lowercase.
// 	All three words will be different.
// 	Remember that the string word is in the middle.
function isBetween(first, last, word) {
    return word.trim().toLowerCase() > first.trim().toLowerCase() && word.trim().toLowerCase() < last.trim().toLowerCase() ? true : false
}
console.log(isBetween("apple", "banana", "azure"))
console.log(isBetween("monk", "monument", "monkey"))
console.log(isBetween("bookend", "boolean", "boost"))

console.log("128 --->")
// 128 ==>	Re-Form the Word
// 	A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.
// 		getWord("seas", "onal") ➞ "Seasonal"
// 		getWord("comp", "lete") ➞ "Complete"
// 		getWord("lang", "uage") ➞ "Language"
function getWord(left, right) {
    return left[0].toUpperCase() + left.slice(1) + right
}
console.log(getWord("seas", "onal"))
console.log(getWord("comp", "lete"))
console.log(getWord("lang", "uage"))

console.log("129 --->")
// 129 ==>	Fix the Error: Filtering out Empty Arrays
// 	I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:
// 		function removeEmptyArrays(arr) {
// 			return arr.filter(x => x !== [])
// 		}
// 	However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.
// 		// What I want:
// 		removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
// 		removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]
// 		// What I am getting:
// 		removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
// 		removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
function removeEmptyArrays(arr) {
    return arr.filter(x => x != "")
}
console.log(removeEmptyArrays(["a", "b", []]))
console.log(removeEmptyArrays([1, 2, [], 4]))

console.log("130 --->")
// 130 ==>	Filter by Digit Length
// 	Create a function that filters out an array to include numbers who only have a certain number of digits.
// 	If no numbers of the specified digit length exist, return an empty array.
// 	If all numbers in the array have the specified digit length, return original array.
// 	The sub-array returned should have the same relative order as the original array.
// 		filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// 		// Include only numbers with 3 digits.
// 		filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
// 		// Include only numbers with 1 digit.
// 		filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
// 		// No numbers with only 1 digit exist => return empty array.
// 		filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
// 		// All numbers in the array have 1 digit only => return original array.
function filterDigitLength(array, numbers) {
    return array.filter(element => String(element).length == numbers)
}
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3))
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1))
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1))
console.log(filterDigitLength([5, 6, 8, 9], 1))

console.log("131 --->")
// 131 ==>	Lexicographically First and Last
// 	Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. Output the results in the following manner:
// 		firstAndLast(string) ➞ [first, last]
// 		firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]
// 		firstAndLast("bench") ➞ ["bcehn", "nhecb"]
// 		firstAndLast("scoop") ➞ ["coops", "spooc"]
// 	Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
// 	Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).
function firstAndLast(String) {
    return [String.split("").sort().join(""), String.split("").sort().reverse().join("")]
}
console.log(firstAndLast("marmite"))
console.log(firstAndLast("bench"))
console.log(firstAndLast("scoop"))

console.log("132 --->")

console.log("133 --->")
// 133 ==>	Even Odd Partition
// 	Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:
// 		[[evens], [odds]]
// 		evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]
// 		evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]
// 		evenOddPartition([1, 3, 5, 7, 9]) ➞ [[], [1, 3, 5, 7, 9]]
// 		evenOddPartition([]) ➞ [[], []]
// 	Keep the same relative ordering as the original array.
function evenOddPartition(array) {
    let even = [], odd = [];
    array.map(element => element % 2 == 0 ? even.push(element) : odd.push(element))
    return [even, odd]
}
console.log(evenOddPartition([5, 8, 9, 2, 0]))
console.log(evenOddPartition([1, 0, 1, 0, 1, 0]))
console.log(evenOddPartition([1, 3, 5, 7, 9]))
console.log(evenOddPartition([]))

console.log("134 --->")
// 134 ==>	Leap Years
// 	A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:
// 		A year must either be divisible by 400 or divisible by 4 and not 100.
// 	Given a year you must implement a function that returns true if it's a leap year, or false if it's not.
// 		isLeap(2020) ➞ true
// 		// Exactly divided by 4 and not by 100.
// 		isLeap(1800) ➞ false
// 		// Exactly divided by 4, but is also exactly divided by 100.
// 		isLeap(2000) ➞ true
// 		// Exactly divided by 400.
// 		isLeap(2019) ➞ false
// 		// It can't be exactly divided by 400 or by 4.
// 	Exactly divided can be interpreted as the remainder of the division is equal to 0.
// 	Try to implement this function writing a single line of code.
function isLeap(year) {
    return year % 400 == 0 || year % 4 == 0 && year % 100 != 0 ? true : false
}
console.log(isLeap(2020))
console.log(isLeap(1800))
console.log(isLeap(2000))
console.log(isLeap(2019))

console.log("135 --->")
// 135 ==>	Drink Sorting
// 	You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.
// 	Assume that the following array of drink objects needs to be sorted:
// 		drinks = [
// 			{name: "lemonade", price: 50},
// 			{name: "lime", price: 10}
// 		]
// 	The output of the sorted drinks object will be:
// 		sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
function sortDrinkByPrice(array) {
    return array.sort((a, b) => a.price - b.price)
}
console.log(sortDrinkByPrice([{ name: "lime", price: 100 }, { name: "lemonade", price: 50 }, { name: "lemonade2", price: 150 }]))

console.log("136 --->")
// 136 ==>	Characters in Shapes
// 	Create a function that counts how many characters make up a rectangular shape. You will be given a array of strings.
function countCharacters(array) {
    return array.join("").length
}
console.log(countCharacters([
    "###",
    "###",
    "###"
])) // 9
console.log(countCharacters([
    "22222222",
    "22222222",
])) // 16
console.log(countCharacters([
    "------------------"
])) // 18
console.log(countCharacters([])) // 0
console.log(countCharacters(["", ""])) // 0

console.log("137 --->")
// 137 ==>	FizzBuzz Interview Question
// 	Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
// 		- If the number is a multiple of 3 the output should be "Fizz".
// 		- If the number given is a multiple of 5, the output should be "Buzz".
// 		- If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
// 		- If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
// 		- The output should always be a string even if it is not a multiple of 3 or 5.
// 		FizzBuzz(3) ➞ "Fizz"
// 		FizzBuzz(5) ➞ "Buzz"
// 		FizzBuzz(15) ➞ "FizzBuzz"
// 		FizzBuzz(4) ➞ "4"
function FizzBuzz(number) {
    return number % 3 == 0 && number % 5 == 0 ? "FizzBuzz" : number % 3 == 0 ? "Fizz" : number % 5 == 0 ? "Buzz" : `${number}`
}
console.log(FizzBuzz(3))
console.log(FizzBuzz(5))
console.log(FizzBuzz(15))
console.log(FizzBuzz(4))

console.log("138 --->")
// 138 ==>	Return Only the Integer
// 	Write a function that takes an array of elements and returns only the integers.
// 		returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ➞ [9, 2, 16]
// 		returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ➞ [81, 123]
// 		returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ➞ [10, 56, 20, 3]
// 		returnOnlyInteger(["String",  true,  3.3,  1]) ➞ [1]
function returnOnlyInteger(array) {
    return array.filter(element => Number.isInteger(element))
}
console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]))
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]))
console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]))
console.log(returnOnlyInteger(["String", true, 3.3, 1]))

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

console.log("147 --->")
// 147 ==>	Purge and Organize
// 	Given an array of numbers, write a function that returns an array that...
// 		Has all duplicate elements removed.
// 		Is sorted from least to greatest value.
// 		uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
// 		uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
// 		uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
function uniqueSort(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i])
        }
    }
    return result.sort()
}
console.log(uniqueSort([1, 2, 4, 3]))
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))
console.log(uniqueSort([6, 7, 3, 2, 1]))

console.log("148 --->")
// 148 ==>	Something in the Box?
// 	Create a function that returns true if an asterisk * is inside a box.
// 		inBox([
// 			"###",
// 			"#*#",
// 			"###"
// 		]) ➞ true
// 		inBox([
// 			"####",
// 			"#* #",
// 			"#  #",
// 			"####"
// 		]) ➞ true
// 		inBox([
// 			"*####",
// 			"# #",
// 			"#  #*",
// 			"####"
// 		]) ➞ false
// 		inBox([
// 			"#####",
// 			"#   #",
// 			"#   #",
// 			"#   #",
// 			"#####"
// 		]) ➞ false
// 	The asterisk may be in the array, however, it must be inside the box, if it exists.
function inBox(array) {
    array.shift()
    array.pop()
    let str = array.join()
    return str.slice(1, str.length - 1).split("").includes("*")
    return str
}
console.log(inBox([
    "###",
    "#*#",
    "###"
]))
console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]))
console.log(inBox([
    "*####",
    "# #",
    "#  #*",
    "####"
]))
console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]))

console.log("149 --->")
// 149 ==>	Find the Missing Number
// 	Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// 		missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// 		missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// 		missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// 	The array of numbers will be unsorted (not in order).
// 	Only one number will be missing.
function missingNum(array) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return +arr.filter(element => !array.includes(element) ? element : "")
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))

console.log("150 --->")
// 150 ==>	Reverse the Order of Words with Five Letters or More
// 	Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// 		reverse("Reverse") ➞ "esreveR"
// 		reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
// 		reverse("The dog is big.") ➞ "The dog is big."
function reverse(string) {
    return string.split(" ").map(element => element.length > 4 ? element.split("").reverse().join("") : element).join(" ")
}
console.log(reverse("Reverse"))
console.log(reverse("This is a typical sentence."))
console.log(reverse("The dog is big."))

console.log("151 --->")
// 151 ==> Remove Surrounding Duplicate Items
// 	Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.
// 		uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]
// 		uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]
// 		uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]
// 	The initial sequence of items can be either a string or an array.
// 	Tests are case sensitive.
function uniqueInOrder(string) {
    let result = []
    Array.from(string).map(((element, index, arr) => arr[index] != arr[index + 1] ? result.push(element) : []))
    return result
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"))
console.log(uniqueInOrder("ABBCcAD"))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))

console.log("152 --->")
// 153 ==>	Word Builder
// 	In this challenge, you have to build a word from the scrambled letters contained in the first given array. For establishing how to assign the spots to the letters, you will use the positions contained in the second given array.
// 		letters = ["e", "t", "s", "t"]
// 		positions = [1, 3, 2, 0]
// 		Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
// 		Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
// 		Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
// 		Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
// 	Given the two arrays letters (containing the scrambled letters of the word) and positions (containing the indexes of the letters), implement a function that returns the resulting word as a string.
// 		wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]) ➞ "test"
// 		wordBuilder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"
function wordBuilder(array1, array2) {
    let result = []
    array1.map((element, index, arr) => result[array2[index]] = element)
    return result.join("")
}
console.log(wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]))
console.log(wordBuilder(["g", "e", "o"], [1, 0, 2]))

console.log("153 --->")
// 155 ==>	Sort the Unsortable
// 	In this challenge you will be given an array similar to the following:
// 		[[3], 4, [2], [5], 1, 6]
// 	In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
// 		[1, [2], [3], 4, [5], 6]
// 	Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
// 		sortIt([4, 1, 3]) ➞ [1, 3, 4]
// 		sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
// 		sortIt([4, [1], 3]) ➞ [[1], 3, 4]
// 		sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
// 		sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
// 	To reiterate, elements of the array will be either integers or arrays with a single integer.
function sortIt(array) {
    return array.sort((a, b) => {
        if (Array.isArray(a) && Array.isArray(b)) {
            return a[0] - b[0]
        } else if (Array.isArray(a)) {
            return a[0] - b
        } else if (Array.isArray(b)) {
            return a - b[0]
        } else {
            return a - b
        }
    })
}
console.log(sortIt([4, 1, 3]))
console.log(sortIt([[4], [1], [3]]))
console.log(sortIt([4, [1], 3]))
console.log(sortIt([[4], 1, [3]]))
console.log(sortIt([[3], 4, [2], [5], 1, 6]))

console.log("154 --->")
// 154 ==>	Playing RisiKo!
// 	In a game of RisiKo! (the Italian version of the popular board game Risk!), the players throw six-sided dice to conquer territories around a World map. When two players contend a territory there is a battle, and they throw from 1 up to 3 dice, with each die being an army sent to fight. To establish who loses armies after the battle, the dice are compared starting from the highest value, and proceeding with the comparisons in descending order (eliminating the dice in excess if the amount of thrown dice among the two players is different). When the rolls are compared, for each comparison the die of the attacking player must have a greater value than the defender's die to win the fight. In the case of a tie, the defender wins the single fight. Given two arrays att (rolls of the attacker) and def (rolls of the defender), implement a function that returns the armies lost by the defender as an integer.
// 		When two compared dice have the same value, the player who defends wins the fight (see example #2).
// 		When the number of rolls is different among the two players, the comparisons to do are equals to the lowest amount of rolled dice (see examples #2 and #3).
// 		You can expect only valid inputs: each array will have at least a die, and no more than three dice, with values in the range from 1 to 6.
// 		risiko([3, 6, 4], [2, 5, 3]) ➞ 3
// 		// Comparison 1:
// 		// ATT(6) vs. DEF(5): DEF loses an army
// 		// Comparison 2:
// 		// ATT(4) vs. DEF(3): DEF loses an army
// 		// Comparison 3:
// 		// ATT(3) vs. DEF(2): DEF loses an army
// 		risiko([3, 6], [6, 4, 4]) ➞ 0
// 		// Comparison 1:
// 		// ATT(6) vs. DEF(6): ATT loses an army
// 		// Comparison 2:
// 		// ATT(3) vs. DEF(4): ATT loses an army
// 		risiko([3, 1], [1]) ➞ 1
// 		// Comparison 1:
// 		// ATT(3) vs. DEF(1): DEF loses an army
function risiko(attack, defender) {
	[attack, defender].forEach( val => val.sort().reverse() );
	return attack.filter( (val, index) => val > defender[index] ).length;
}
console.log(risiko([3, 6, 4], [2, 5, 3]))
console.log(risiko([3, 6], [6, 4, 4]))
console.log(risiko([3, 1], [1]))

console.log("155 --->")
// 155 ==>	Sort the Unsortable
// 	In this challenge you will be given an array similar to the following:
// 		[[3], 4, [2], [5], 1, 6]
// 	In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
// 		[1, [2], [3], 4, [5], 6]
// 	Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
// 		sortIt([4, 1, 3]) ➞ [1, 3, 4]
// 		sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
// 		sortIt([4, [1], 3]) ➞ [[1], 3, 4]
// 		sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
// 		sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
// 	To reiterate, elements of the array will be either integers or arrays with a single integer.
function sortIt(array) {
    return array.sort((a, b) => {
        if (Array.isArray(a) && Array.isArray(b)) {
            return a[0] - b[0]
        } else if (Array.isArray(a)) {
            return a[0] - b
        } else if (Array.isArray(b)) {
            return a - b[0]
        } else {
            return a - b
        }
    })
}
console.log(sortIt([4, 1, 3]))
console.log(sortIt([[4], [1], [3]]))
console.log(sortIt([4, [1], 3]))
console.log(sortIt([[4], 1, [3]]))
console.log(sortIt([[3], 4, [2], [5], 1, 6]))

console.log("156 --->")
// 156 ==>	Merge Arrays in Order
// 	Given two arrays, merge them to one array and sort the new array in the same order as the first array.
// 		mergeSort([1, 2, 3], [5, 4, 6]) ➞ [1, 2, 3, 4, 5, 6]
// 		mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]) ➞ [8, 6, 4, 2, 0, -2, -4, -6]
// 		mergeSort([120, 180, 200], [190, 175, 130]) ➞ [120, 130, 175, 180, 190, 200]
// 	You'll always get two arrays as arguments.
// 	The first array is always sorted, either asc or desc.
function mergeSort(array1, array2) {
    return [...array1, ...(array1[0] < array1[1] ? array2.sort() : array2.sort((a, b) => b - a))]
}
console.log(mergeSort([1, 2, 3], [5, 4, 6]))
console.log(mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]))
console.log(mergeSort([120, 180, 200], [190, 175, 130]))

console.log("157 --->")
// 157 ==>	Rearrange the Number
// 	Given a number, return the difference between the maximum and minimum numbers that can be formed when the digits are rearranged.
// 		rearrangedDifference(972882) ➞ 760833
// 		// 988722 - 227889 = 760833
// 		rearrangedDifference(3320707) ➞ 7709823
// 		// 7733200 - 23377 = 7709823
// 		rearrangedDifference(90010) ➞ 90981
// 		// 91000 - 19 = 90981
function rearrangedDifference(number) {
    let string = Array.from(String(number)).sort()
    return -(+string.join("") - +string.reverse().join(""))
}
console.log(rearrangedDifference(972882))
console.log(rearrangedDifference(3320707))
console.log(rearrangedDifference(90010))

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