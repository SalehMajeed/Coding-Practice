/*
1 ==>
    addition(3, 2) ➞ 5
    addition(-3, -6) ➞ -9
    addition(7, 3) ➞ 10
    addition('7', '3') ➞ 10
    addition('7', 3) ➞ 10

convert into number->
    parse Method
    Number Method
    + + + Method
*/
console.log("1 --->")
function add(x, y) {
  return parseInt(x) + parseInt(y);
}
let a = -3, b = -6;
console.log(add(a, b))

/*
2 ==>
  convert(5) ➞ 300
  convert(3) ➞ 180
  convert(2) ➞ 120
  convert('2') ➞ 120
*/
console.log("2 --->")
function mul(x) {
  let y = x * 60;
  return y;
}
let x = 5;
console.log(mul(5));

/*
3 ==>
  addition(0) ➞ 1
  addition('9') ➞ 10
  addition('-3') ➞ -2
*/

console.log("3 --->")
function adds(x) {
  return +x + 1;
}
  x = -3;
console.log(adds(x));

/*
4 ==>
  giveMeSomething("is better than nothing") ➞ "something is better than nothing"
  giveMeSomething("Bob Jane") ➞ "something Bob Jane"
  giveMeSomething("something") ➞ "something something"
*/
console.log("4 --->")
function giveMeSomething(x) {
  return `something ${x}`
}
x = "is better than nothing";
giveMeSomething(x);

/*
5 ==>
  `Area of a Triangle`
  triArea(3, 2) ➞ 3
  triArea(7, 4) ➞ 14
  triArea(10, 10) ➞ 50
*/
console.log("5 --->")
function triArea(x, y) {
  return (x * y) / 2;
}
console.log(triArea(3, 2));

/*
6 ==>
  `Convert Hours into Seconds`
  howManySeconds(2) ➞ 7200
  howManySeconds(10) ➞ 36000
  howManySeconds(24) ➞ 86400
*/
console.log("6 --->")
function howManySeconds(x) {
  return x * 3600;
}
console.log(howManySeconds(2));

/*
7 ==>
  getFirstValue([1, 2, 3]) ➞ 1
  getFirstValue([80, 5, 100]) ➞ 80
  getFirstValue([-500, 0, 50]) ➞ -500
*/
console.log("7 --->")
function getFirstValue(arr) {
  if(Array.isArray(arr) && arr.length != 0)
  {return arr[0];}
  else{
    return NaN;
  }
}
let arr = [1, 2, 3];
console.log(getFirstValue(arr));

/*
8 ==>
  `Maximum Edge of a Triangle`
  nextEdge(8, 10) ➞ 17
  nextEdge(5, 7) ➞ 11
  nextEdge(9, 2) ➞ 10
*/
console.log("8 --->")
function nextEdge(x, y) {
  return x + y - 1;
}
console.log(nextEdge(8, 10));

/*
9 ==>
  `Find the Perimeter of a Rectangle`
  `Create a function that takes length and width and finds the perimeter of a rectangle.`
  findPerimeter(6, 7) ➞ 26
  findPerimeter(20, 10) ➞ 60
  findPerimeter(2, 9) ➞ 22
*/
console.log("9 --->")
function findPerimeter(x, y) {
  return (x + y) * 2;
}
console.log(findPerimeter(20, 10));

/*
10 ==>
  `Return the Remainder from Two Numbers`
  `There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.`
  remainder(1, 3) ➞ 1
  remainder(3, 4) ➞ 3
  remainder(-9, 45) ➞ -9
  remainder(5, 5) ➞ 0
*/
console.log("10 --->")
function remainder(x, y) {
  if((x && y))
  return x % y;
}
console.log(remainder(1, 3));