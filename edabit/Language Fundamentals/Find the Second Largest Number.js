function secondLargest(arr) {
	return arr.sort((a, b) => (a > b ? -1 : 1))[1];
}

console.log(secondLargest([10, 40, 30, 20, 50]), 40);
console.log(secondLargest([25, 143, 89, 13, 105]), 105);
console.log(secondLargest([54, 23, 11, 17, 10]), 23);
console.log(secondLargest([513, 211, 131, 417, 11]), 417);
console.log(secondLargest([63, 44, 11, 22, 33, 66, 65]), 65);
