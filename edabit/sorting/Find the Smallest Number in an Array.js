function find_smallest_num(arr) {
	return Math.min(...arr);
}

console.log(find_smallest_num([34, 15, 88, 2]));
console.log(find_smallest_num([34, -345, -1, 100]));
console.log(find_smallest_num([-76, 1.345, 1, 0]));
console.log(find_smallest_num([0.4356, 0.8795, 0.5435, -0.9999]));
console.log(find_smallest_num([7, 7, 7]));
