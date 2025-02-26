function isValidParenthesis(str) {
    const stack = [];
    const validSymbol = {
        "{": "}",
        "[": "]",
        "(": ")"
    };
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (validSymbol[currentChar]) {
            stack.push(currentChar);
        } else if (validSymbol[stack.pop()] !== currentChar) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(isValidParenthesis("()"));
console.log(isValidParenthesis("()[]{}"));
console.log(isValidParenthesis("(]"));
console.log(isValidParenthesis("([)]"));
console.log(isValidParenthesis("{[]}"));