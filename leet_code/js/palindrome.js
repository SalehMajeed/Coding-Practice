function is_palindrome(number) {
    if(number < 0) return false
    let pallindrome = 0
    let new_number = number
    while (new_number != 0) {
        pallindrome = pallindrome * 10 + (new_number % 10)
        new_number = parseInt(new_number / 10)
    }
    return number == pallindrome
}
console.log(is_palindrome(121))
console.log(is_palindrome(-121));
console.log(is_palindrome(10));
console.log(is_palindrome(-101));