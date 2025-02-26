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