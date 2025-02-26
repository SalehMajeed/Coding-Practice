  console.log("164 --->")
// 164 ==>	The Frugal Gentleman
// 	Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest. Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
// 		chosenWine([
// 			{ name: "Wine A", price: 8.99 },
// 			{ name: "Wine 32", price: 13.99 },
// 			{ name: "Wine 9", price: 10.99 }
// 		]) ➞ "Wine 9"
// 		chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
// 		chosenWine([]) ➞ null
// 	All wines will be different prices, so there is no confusion in the ordering.
function chosenWine(array){
    return (array.sort(({price:a}, {price:b})=> a - b)[1] || array[0] || {name:null}).name
  }
  console.log(chosenWine([
              { name: "Wine A", price: 8.99 },
              { name: "Wine 32", price: 13.99 },
              { name: "Wine 9", price: 10.99 }
          ]))
  console.log(chosenWine([{ name: "Wine A", price: 8.99 }]))
  console.log(chosenWine([]))

  console.log("165 --->")
// 165 ==>	Leaderboard Sort
// 	Given an array of users, each defined by an object with the following properties: name, score, reputation create a function that sorts the array to form the correct leaderboard. The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score. Once you know the trueScore of each user, sort the array according to it in descending order.
// 		leaderboards([
// 			{ name: "a", score: 100, reputation: 20 },
// 			{ name: "b", score: 90, reputation: 40 },
// 			{ name: "c", score: 115, reputation: 30 },
// 		]) ➞ [
// 			{ name: "c", score: 115, reputation: 30 },  // trueScore = 175
// 			{ name: "b", score: 90, reputation: 40 },   // trueScore = 170
// 			{ name: "a", score: 100, reputation: 20 }   // trueScore = 140
// 		]
function leaderboards(array){
  return array.sort((a,b)=>((b.reputation * 2) + b.score) - ((a.reputation * 2) + a.score))
}
console.log(leaderboards([
			{ name: "a", score: 100, reputation: 20 },
			{ name: "b", score: 90, reputation: 40 },
			{ name: "c", score: 115, reputation: 30 },
        ]))
        
  console.log("166 --->")
// 166 ==>	Concatenate to Form Target Array
// 	Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise. Arrays do not have to be sorted (see example #2). Arrays should concatenate to create the final array exactly (see examples #3 and #4).
// 		canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
// 		canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
// 		canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Duplicate 7s not found in target array.
// 		canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Missing 6 from target array.
function canConcatenate(smaller,target){
    let small = smaller.flat(+Infinity).sort()
    target.sort()
    if(small.length != target.length){
      return false
    }
    for(let i=0; i<target.length; i++){
      if(small[i] != target[i]){
        return false
      }
    }
    return true
  }
  console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))
  console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]))
  console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]))
  console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]))

  console.log("167 --->")
  // 167 ==>	Sum of Missing Numbers
// 	Create a function that returns the sum of missing numbers. The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.
// 		sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29 // 2 + 4 + 6 + 8 + 9
// 		sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
// 		sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
function sumMissingNumbers(array){
  let max = Math.max(...array)
  array.sort()
  let total = 0
  for(let i=Math.min(...array); i<=max; i++){
    if(!array.includes(i)){
      total += i
    }
  }
  return total
}
console.log(sumMissingNumbers([1, 3, 5, 7, 10]))
console.log(sumMissingNumbers([10, 7, 5, 3, 1]))
console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]))