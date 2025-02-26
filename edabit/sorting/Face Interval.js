function face_interval(num) {
	const interval = Math.max(...num) - Math.min(...num);
	return typeof num == 'string' ? ':/' : num.includes(interval) ? ':)' : ':(';
}

console.log(face_interval([1, 2, 5, 8, 3, 9]));
console.log(face_interval([5, 2, 8, 3, 11]));
console.log(face_interval('bruh'));
