const button = document.getElementById('button');

let time = 2000;
let click = 0;
button.addEventListener('click', () => {
	setTimeout(delay, time);
});

function delay() {
	console.log('hello');
}

function fn() {
	click += 1;
	function call() {
		setTimeout(() => {
			click -= 1;
			console.log('hello');
		}, 2000);
	}
	setTimeout(() => {}, 2000);
	if (click > 0) {
		call();
	}
}

// document.getElementById('button').addEventListener('click', function event_call(event) {
// 	console.log('clicked');
// 	document.getElementById('button').removeEventListener('click', event_call);
// 	setTimeout(() => {
// 		document.getElementById('button').addEventListener('click', event_call);
// 	}, 1000 * 5);
// });

// const debounce = (func, delay) => {
// 	let debounceTimer;
// 	return function () {
// 		if (debounceTimer) {
// 			clearTimeout(debounceTimer);
// 		}
// 		debounceTimer = setTimeout(() => func(), delay);
// 	};
// };

// const throttle = (func, delay) => {
// 	let last = 0;
// 	return (...agrs) => {
// 		const now = new Date().getTime();
// 		if (now - last < delay) {
// 			return;
// 		}
// 		last = now;
// 		return func(...agrs);
// 	};
// };

// button.addEventListener(
// 	'click',
// 	debounce(function () {
// 		console.log('clicked');
// 	}, 3000)
// );
