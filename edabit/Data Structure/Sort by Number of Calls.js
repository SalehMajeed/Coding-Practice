function funcSort(arr) {
	const count = arg => (typeof arg == 'function' ? 1 + count(arg()) : 0);
	return arr.sort((a, b) => (count(a) > count(b) ? 1 : -1));
}

const f1 = _ => 'hello';
const f2 = _ => _ => 'edabit';
const f3 = _ => _ => _ => 'user';

console.log(funcSort([f2, f3, f1]));
console.log(funcSort([f1, f2, f3]));
console.log(funcSort([f2, 'func']));
