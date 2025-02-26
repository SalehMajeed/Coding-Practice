// Sort stack
// Input:  -3  <--- Top
//         14
//         18
//         -5
//         30
// Output: 30  <--- Top
//         18
//         14
//         -3
//         -5
// ===operation allowed===
// pop()
// push()
// top()/peek()
// isEmpty() / st.length == 0

const arr = [-3, 14, 18, -5, 30];

let i = 0;
function sort_stack([...input]) {
	let temp_arr = [];

	temp_arr.push(input.pop());
	console.log(temp_arr, input);

	if (temp_arr.top() > input.top()) {
		const temp_val = temp_arr.pop();
		temp_arr.push(input.pop());
		temp_arr.push(temp_val);
	}
	console.log(temp_arr, input);

	if (temp_arr.top() > input.top()) {
		const temp_val = temp_arr.pop();
		temp_arr.push(input.pop());
		temp_arr.push(temp_val);
	}
	console.log(temp_arr, input);

	if (temp_arr.top() > input.top()) {
		const temp_val = temp_arr.pop();
		temp_arr.push(input.pop());
		temp_arr.push(temp_val);
	}
	console.log(temp_arr, input);

	if (temp_arr.top() > input.top()) {
		const temp_val = temp_arr.pop();
		temp_arr.push(input.pop());
		temp_arr.push(temp_val);
	}
	console.log(temp_arr, input);

	input.push(temp_arr.pop());
	console.log(temp_arr, input);

	input.push(temp_arr.pop());
	console.log(temp_arr, input);

	if (temp_arr.top() > input.top()) {
		const temp_val = temp_arr.pop();
		temp_arr.push(input.pop());
		temp_arr.push(temp_val);
	}
	console.log(temp_arr, input);

	input.push(temp_arr.pop());
	console.log(temp_arr, input);

	input.push(temp_arr.pop());
	console.log(temp_arr, input);


	if (temp_arr.top() > input.top()) {
		const temp_val = temp_arr.pop();
		temp_arr.push(input.pop());
		temp_arr.push(temp_val);
	}
	console.log(temp_arr, input);
	// return input;
}

Array.prototype.top = function () {
	return this[this.length - 1];
};

console.log(sort_stack(arr));
