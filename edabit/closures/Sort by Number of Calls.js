function func_sort(arr) {
	const callback_func = value => (typeof value == 'function' ? 1 + callback_func(value()) : 0);
	return arr.sort((a, b) => (callback_func(a) > callback_func(b) ? 1 : 0));
}

const f1 = _ => 'hello';
// f1() ➞ "hello"

const f2 = _ => _ => 'edabit';
// f2()() ➞ "edabit"

const f3 = _ => _ => _ => 'user';
// f3()()() ➞ "user"

console.log(func_sort([f2, f3, f1]));
// [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

console.log(func_sort([f1, f2, f3]));
// [f1, f2, f3] ➞ [1, 2, 3] ➞ [1, 2, 3] ➞ [f1, f2, f3]

console.log(func_sort([f2, 'func']));
// [f2, "func"] ➞ [2, 0] ➞ [0, 2] ➞ ["func", f2]
