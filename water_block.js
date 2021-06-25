let arr = [3, 0, 2, 0, 4, 0, 2, 0, 1]; //-> 10
function water_block(arr) {
	let piller_1 = null;
	let piller_2 = null;
	let res = 0;
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
		if (arr[i] > 0) {
			let distance = 0;
			let obs = 0;
			piller_1 = arr[i];
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] >= arr[i]) {
					piller_2 = arr[j];
					res += Math.min(piller_1, piller_2) * distance - obs;
					i = j - 1;
					break;
				} else {
					if (j == arr.length - 1) {
					}
					obs += arr[j];
					distance++;
				}
			}
		}
	}
	return res;
}

function find_value(arr, search_value, start) {
	let min = 0;
	for (let i = start; i < arr.length; i++) {
		if (arr[i] < search_value && arr[i] > min) {
			min = arr[i];
		}
		if (min == search_value - 1) {
			break;
		}
	}
	return min;

	if (j == arr.length - 1) {
		piller_2 = find_value(arr, arr[i], i);
		for (let k = i + 1; arr[k] <= piller_2; k++) {
			if (arr[k] >= arr[i]) {
				res += Math.min(piller_1, piller_2) * distance - obs;
				i = k - 1;
				break;
			} else {
				obs += arr[k];
				distance++;
			}
		}
	}
}

function water_block_brute_force(arr) {
	let ans = 0;
	for (let i = 0; i < arr.length; i++) {
		let left_max = 0;
		let right_max = 0;
		
		for (let j = 0; j <= i; j++) {
			left_max = Math.max(left_max, arr[j]);
		}
		for (let j = i; j < arr.length; j++) {
			right_max = Math.max(right_max, arr[j]);
		}
		ans += Math.min(left_max, right_max) - arr[i];
	}
	return ans;
}

console.log(water_block_brute_force(arr));

arr = [3, 0, 2, 0, 4, 0, 2, 0, 3]; //-> 14
console.log(water_block_brute_force(arr));

arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; //-> 6
console.log(water_block_brute_force(arr));
