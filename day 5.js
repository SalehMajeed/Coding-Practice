// 41 ==> Fix the Error: Check Whether a Given Number Is Odd
//     I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.
console.log("41 --->")
function isOdd(num){
    return !!(num % 2)
}
console.log(isOdd(-5))
console.log(isOdd(25))
console.log(isOdd(0))

// 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.
console.log("42 --->")
function flipBaloon(number){
    return +!number
}
console.log(flipBaloon(true))
console.log(flipBaloon(false))
console.log(flipBaloon(1))
console.log(flipBaloon(0))

// 43 ==> Kinetic Energy
//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2
console.log("43 --->")
function kineticEnergy(mass, velocity){
    return parseInt(0.5 * mass * /*Bug Prone*/(velocity**2))
}
console.log(kineticEnergy(60,3))
console.log(kineticEnergy(45,10))
console.log(kineticEnergy(63.5,7.35))

// 44 ==> Name Greeting!
//     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".
console.log("44 --->")
    fun = (name) =>{
    return `Hello ${name} !`
}
console.log(fun("Gerald"))
console.log(fun("Tiffany"))
console.log(fun("Ed"))

// 45 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.
console.log("45 --->")
function calculteExponent(base, exponent){
    return base ** exponent
    //Math.power()
    // js = prototypal --> prototype Chain
    //Recursion
}
console.log(calculteExponent(5, 5))
console.log(calculteExponent(10, 10))
console.log(calculteExponent(3, 3))

// 46 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.
console.log("46 --->")
function newWord(word){
    return word.slice(1)
}
console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log(newWord("plum"))

// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.
console.log("47 --->")
function concat(array1, array2){
    [array1, array2].flat(1);
    return [...array1, ...array2]
    // .concate array1.concate(array2)
    // loop
}
console.log(concat([1, 3, 5], [2, 6, 8]))
console.log(concat([7, 8], [10, 9, 1, 1, 2]))
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.
console.log("48 --->")
function search(array, element){
    for(let i=0; i<array.length-1; i++){
        /* if(array[i] == element){
            return i
        }
                 */
        return array.indexOf(element)
    }
   // return -1
}
console.log(search([1, 5, 3], 5))
console.log(search([9, 8, 3], 3))
console.log(search([1, 2, 3], 4))
console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))

// 49 ==> Number of Stickers
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.
console.log("49 --->")
function howManyStickers(n){
    return 6 * (n * n)
}
console.log(howManyStickers(1))
console.log(howManyStickers(2))
console.log(howManyStickers(3))

// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.
// find index
//conatain
// .some()
// .includes()
// .indexOf()
console.log("50 --->")
function check(array, num){
    return array.includes(num)
}
console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))