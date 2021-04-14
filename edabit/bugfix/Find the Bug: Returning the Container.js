function get_container(product) {
	let container;
	switch (product) {
		case 'Bread':
			container = 'bag';
			break;
		case 'Beer':
		case 'Milk':
			container = 'bottle';
			break;
		case 'Cerials':
			container = 'box';
			break;
		case 'Eggs':
			container = 'carton';
			break;
		case 'Candy':
			container = 'plastic';
			break;
		default:
			container = null;
	}

	return container;
}

console.log(get_container('Bread'));
console.log(get_container('Beer'));
console.log(get_container('Candy'));
console.log(get_container('Cheese'));
