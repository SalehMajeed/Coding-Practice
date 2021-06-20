const magic = new Proxy(
	{},
	{
		get:
			(target, property) =>
			(val1, ...val2) =>
				val1[property].apply ? val1[property](...val2) : val1[property],
	}
);

console.log(magic.replace('azerty', 'a', 'A'));
console.log(magic.length('hello word'));
console.log(magic.trim('  javascript is awesome  '));
console.log(magic.normalize('éèê', 'NFD'));
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4));
