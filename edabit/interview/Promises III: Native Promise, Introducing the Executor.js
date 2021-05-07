let promise = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'edabit');
});

promise.then(val => console.log(val));
