// 198 ==>	Matryoshka Dolls
// 	Matryoshka dolls are traditionally wooden dolls that can be nested by fitting smaller dolls into larger ones. Suppose arrays can be nested similarly, placing smaller arrays into larger ones, in the following sense:
// 	Array A can be nested inside Array B if:
// 		min(array A) > min(array B)
// 		max(array A) < max(array B)
// 	For example, if A = [2, 3, 9, 5] and B = [10, 2, 1], then A can be nested inside B, since:
// 		min(A) = 2 > 1 = min(B) and
// 		max(A) = 9 < 10 = max(B)
// 	Create a function that returns true if every single sub-array inside an array can be nested Matroyshka style, and false otherwise.
// 		matryoshka([[2, 2, 7], [3, 4, 5, 6], [4, 5]]) ➞ true
// 		// [4, 5] nested inside [3, 4, 5, 6], [3, 4, 5, 6] nested inside [2, 2, 7], etc.
// 		// Dolls nested from largest to smallest.
// 		matryoshka([[4, 5], [6, 3], [7, 6, 5, 4, 3, 2], [8, 1]]) ➞ true
// 		// Dolls nested from smallest to largest.
// 		matryoshka([[7, 1], [7, 6, 5, 4, 3, 2], [6, 3], [4, 5]]) ➞ false
// 		// [7, 1] and [7, 6, 5, 4, 3, 2] share the same max.
// 		// Second doll cannot be nested properly inside first doll.
// 		matryoshka([[1, 5], [2, 6], [3, 7]]) ➞ false
// 		// Elements are overlapping, cannot be nested.
// 	Subarrays can be nested from smallest to largest or largest to smallest.
// 	Elements must be strictly nested - e.g. no two arrays can share either the same MAX or the same MIN (see example #3).
// 	Subarrays may not necessarily have unique elements (see example #1).
// 	Subarrays can be in any order (see example #2).
function matryoshka(array) {
    len = array.flat(+Infinity).length
    for (let i = 1, j = array.length - 2; i < array.length; i++, j--) {
        let min_i_a = Math.min(...array[i - 1]);
        let max_i_a = Math.max(...array[i - 1]);

        let min_i_b = Math.min(...array[i]);
        let max_i_b = Math.max(...array[i]);

        let min_j_a = Math.min(...array[1 + j]);
        let max_j_a = Math.max(...array[1 + j]);

        let min_j_b = Math.min(...array[j]);
		let max_j_b = Math.max(...array[j]);

        if (min_i_a > min_i_b && max_i_a < max_i_b) {
            array[i] = [...array[i-1],...array[i]]
            if(array[i].length == len){
                return true
            }
        }
        if(min_j_a > min_j_b && max_j_a < max_j_b){
            array[j] = [...array[1+j],...array[j]]
            if(array[j].length == len){
                return true
            }
        }
    }
	return false
}
console.log(
    matryoshka([
        [2, 2, 7],
        [3, 4, 5, 6],
        [4, 5],
    ])
);
console.log(
    matryoshka([
        [4, 5],
        [6, 3],
        [7, 6, 5, 4, 3, 2],
        [8, 1],
    ])
);
console.log(
    matryoshka([
        [7, 1],
        [7, 6, 5, 4, 3, 2],
        [6, 3],
        [4, 5],
    ])
);
console.log(
    matryoshka([
        [1, 5],
        [2, 6],
        [3, 7],
    ])
);
