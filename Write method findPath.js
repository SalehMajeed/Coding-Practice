/*
			- Write method findPath
			- Should take two params:
			    - object
			    - keys separated by dots as string
			- Return value if it exists at that path inside the object, else return undefined
			*/
const obj = {
	a: {
		b: {
			c: 12,
			j: false,
		},
		k: null,
	},
};

// by aman bhai
function findPath_(obj, path_string) {
	if (path_string == '') {
		return obj;
	}
	const path = path_string.split('.');
	let firstPath = path.shift();
	if (typeof obj[firstPath] != 'undefined') {
		return findPath(obj[firstPath], path.join('.'));
	}
}

function findPath(obj, path_string) {
	let new_obj = { ...obj };
	const new_path_string = path_string.split('.');
	for (let i = 0; i < new_path_string.length; i++) {
		if (new_obj[new_path_string[i]] != undefined) {
			new_obj = new_obj[new_path_string[i]];
		} else {
			return undefined;
		}
	}
	return new_obj;
}

function findPath_eval(obj, path_string) {
	try {
		return eval('obj.' + path_string);
	} catch (e) {
		return undefined;
	}
}

function find_path_recursion(obj, str) {
	let new_arr = str.split('.');
	if (new_arr.length <= 1) {
		if (typeof obj != 'undefined') {
			return obj[new_arr];
		} else {
			return undefined;
		}
	}
	return find_path_recursion(obj[new_arr.shift()], new_arr.join('.'));
}

console.log(find_path_recursion(obj, 'a.b.c')); // 12
console.log(find_path_recursion(obj, 'a.b')); // {c: 12, j: false}
console.log(find_path_recursion(obj, 'a.b.d')); // undefined
console.log(find_path_recursion(obj, 'a.c')); // undefined
console.log(find_path_recursion(obj, 'a.b.c.d')); // undefined
console.log(find_path_recursion(obj, 'a.b.c.d.e')); // undefined
console.log(find_path_recursion(obj, 'a.b.j')); //false
console.log(find_path_recursion(obj, 'a.b.j.k')); //undefined
