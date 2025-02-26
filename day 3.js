// python fundamentals
// importing & cleaning data
// data manipulation
// data visualization(python, opencv, panda, metplotlib, seabon, numpy, time series, statistics)
// statistics fundamentals
// time series
// image processing

// 21 ==> Profitable Gamble
//     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//     profitableGamble(0.2, 50, 9) ➞ true
//     profitableGamble(0.9, 1, 2) ➞ false
//     profitableGamble(0.9, 3, 2) ➞ true
//     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.
console.log("21 --->")
function profitableGamble(prob, prize, pay){
    return prob * prize > pay
}
console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
console.log(profitableGamble(0.9, 3, 2))

// 22 ==> Frames Per Second
//     Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//     frames(1, 1) ➞ 60
//     frames(10, 1) ➞ 600
//     frames(10, 25) ➞ 15000
//     FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
//     Assume the screen produces 60 frames every second.
console.log("22 --->")
function frames(f1, f2){
    return (f1 * f2) * 60
}
console.log(frames(1,1))
console.log(frames(10,1))
console.log(frames(10,25))

// 23 ==> Drinks Allowed?
//     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//     shouldServeDrinks(17, true) ➞ false
//     shouldServeDrinks(19, false) ➞ true
//     shouldServeDrinks(30, true) ➞ false
//     Return true or false.
//     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.
console.log("23 --->")
function shouldServeDrinks(age, breakTime){
    return (age >= 18 && breakTime !== true)
}
console.log(shouldServeDrinks(17,true));
console.log(shouldServeDrinks(19,false));
console.log(shouldServeDrinks(30,true));

// 24 ==> Is the String Empty?
//     Create a function that returns true if a string is empty and false otherwise.
//     isEmpty("") ➞ true
//     isEmpty(" ") ➞ false
//     isEmpty("a") ➞ false
//     A string containing only whitespaces " " does not count as empty.
console.log("24 --->")
function isEmpty(String){
    return String.length == 0
}
console.log(isEmpty(""))
console.log(isEmpty(" "))
console.log(isEmpty("a"))

// 25 ==> Compare Strings by Count of Characters
//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
console.log("25 --->")
function comp(s1, s2){
    return s1.length == s2.length
}
console.log(comp("AB","CD"))
console.log(comp("ABD","DE"))
console.log(comp("hello","moien khan"))

// 26 ==> Multiple of 100
//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
console.log("26 --->")
function divisible(int){
    return (+int)%100 == 0
}
console.log(divisible(1))
console.log(divisible(1000))
console.log(divisible(100))

// 27 ==> Check if an Integer is Divisible By Five
console.log("27 --->")
function divisibleByFive(int){
    return ((+int))%5 == 0
}
console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(37))

// 28 ==> Recursion: Length of a String
//     Write a function that returns the length of a string. Make your function recursive.
console.log("28 --->")
function length(str){
    if(str == ""){
        return 0
    }else{
        return(length(str.substring(1))+1)
    }
    
}
console.log(length("apple"))
console.log(length("make"))
console.log(length("a"))
console.log(length(""))

// 29 ==> Return a String as an Integer
//     Create a function that takes a string and returns it as an integer.
console.log("29 --->")
function stringInt(string){
    return parseInt(string)
}
console.log(stringInt("6"))
console.log(stringInt("1000"))
console.log(stringInt("12"))

// 30 ==> Divides Evenly
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
console.log("30 --->")
function dividesEvenly(int1, int2){
    return int1/int2 === parseInt(int1/int2) 
}
console.log(dividesEvenly(98, 7 ))
console.log(dividesEvenly(85, 4 ))