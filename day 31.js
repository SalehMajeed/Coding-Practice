// 194 ==>	Vowel Families
// 	Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
// 		sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]
// 		sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]
// 		sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]
// 	Words will contain only lowercase letters, and may contain whitespaces.
//     Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).
function sameVowelGroup(array) {
    let obj = {};
    let len = 0;
    let obj_set;
    let vowels = ['a', 'e', 'i', 'o', 'u'],
        same_vowels = [];
    for (let i = 0; i < array.length; i++) {
        obj_set = [
            ...new Set(
                array[i]
                    .split('')
                    .filter((char) => vowels.includes(char))
                    .sort()
            ),
        ].join('');
        obj[obj_set] = array[i] || obj[obj_set].push(array[i]);

        if (obj[obj_set].length > len) {
            len = obj[obj_set].length;
            same_vowels.push(obj[obj_set]);
        }
    }
    return same_vowels;
}
console.log(sameVowelGroup(['toe', 'ocelot', 'maniac']));
console.log(sameVowelGroup(['many', 'carriage', 'emit', 'apricot', 'animal']));
console.log(sameVowelGroup(['hoops', 'chuff', 'bot', 'bottom']));

// 195 ==>	Shortest Unsorted Continuous Subarray
// 	Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
// 	Create a function that returns the length of that subarray.
// 		findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) ➞ 5
// 		// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// 		// the whole array sorted in ascending order.
// 		findUnsortedSubarray([10, 7, 5, 3]) ➞ 4
// 		findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5
// 	The given array can contain duplicates, so ascending order here means <= (see example #3).
// 	If the given array is already sorted or is empty, return 0.
function findUnsortedSubarray(array) {
    if(array[0] == Math.min(...array)){
      return findUnsortedSubarray(array.slice(1))
    }
    if(array[array.length -1] == Math.max(...array)){
      return findUnsortedSubarray(array.slice(0,-1))
    }
    return array.length
  }
  console.log(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]))
  console.log(findUnsortedSubarray([10, 7, 5, 3]))
  console.log(findUnsortedSubarray([2, 4, 4, 4, 4, 3]))
  