const multiply = arr => val => arr.map(each_val => each_val * val);

console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));
