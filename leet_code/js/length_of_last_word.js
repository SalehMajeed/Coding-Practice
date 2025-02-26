function last_word(str) {
    const last_word = str.trim().split(' ')
    return last_word[last_word.length - 1].length
}

console.log(last_word('Hello World')); // 5
console.log(last_word('a ')); // 1
console.log(last_word(' ')); // 0
console.log(last_word('a')); // 1
console.log(last_word('b  a  ')); // 1