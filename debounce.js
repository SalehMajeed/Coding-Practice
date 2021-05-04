document.getElementById('button').addEventListener('click', function event_call(event) {
	console.log('clicked');
	document.getElementById('button').removeEventListener('click', event_call);
	setTimeout(() => {
		document.getElementById('button').addEventListener('click', event_call);
	}, 1000 * 5);
});

const button = document.getElementById('button');

const debounce = (func, delay) => {
	let debounceTimer;
	return function () {
		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}
		debounceTimer = setTimeout(() => func(), delay);
	};
};

const throttle = (func, delay) => {
	let last = 0;
	return (...agrs) => {
		const now = new Date().getTime();
		if (now - last < delay) {
			return;
		}
		last = now;
		return func(...agrs);
	};
};

button.addEventListener(
	'click',
	throttle(function () {
		console.log('clicked');
	}, 3000)
);
