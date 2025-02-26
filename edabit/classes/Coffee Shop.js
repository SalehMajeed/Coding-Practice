class CoffeeShop {
	constructor(name, menu, orders) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
		this.price = 0;
	}
	addOrder(item) {
		if (this.menu.some(val => val.item == item)) {
			this.price += this.menu.filter(val => val.item == item)[0].price;
			this.orders.push(item);
			return 'Order added!';
		} else {
			return 'This item is currently unavailable!';
		}
	}
	fulfillOrder() {
		if (this.orders.length > 0) {
            console.log(this.orders)
			const fulfilled_item = this.orders.shift();
			this.price -= this.menu.filter(val => val.item == fulfilled_item)[0].price;
			return `The ${fulfilled_item} is ready!`;
		} else {
			this.price = 0;
			return 'All orders have been fulfilled!';
		}
	}
	listOrders() {
		return this.orders;
	}
	dueAmount() {
		return +this.price.toFixed(2);
	}
	cheapestItem() {
		return [...this.menu].sort((a, b) => a.price - b.price)[0].item;
	}
	drinksOnly() {
		return this.menu.filter(val => val.type == 'drink').map(val => (val = val.item));
	}
	foodOnly() {
		return this.menu.filter(val => val.type == 'food').map(val => (val = val.item));
	}
}

const [menuA, menuB, menuC] = [
		[
			['orange juice', 'drink', 2.13],
			['lemonade', 'drink', 0.85],
			['cranberry juice', 'drink', 3.36],
			['pineapple juice', 'drink', 1.89],
			['lemon iced tea', 'drink', 1.28],
			['apple iced tea', 'drink', 1.28],
			['vanilla chai latte', 'drink', 2.48],
			['hot chocolate', 'drink', 0.99],
			['iced coffee', 'drink', 1.12],
			['tuna sandwich', 'food', 0.95],
			['ham and cheese sandwich', 'food', 1.35],
			['bacon and egg', 'food', 1.15],
			['steak', 'food', 3.28],
			['hamburger', 'food', 1.05],
			['cinnamon roll', 'food', 1.05],
		],
		[
			['turkey english muffin', 'food', 7.99],
			['avocado toast', 'food', 5.05],
			['chocolate croissant', 'food', 3.0],
			['espresso', 'drink', 2.99],
			['iced caramel macchiato', 'drink', 4.5],
			['cortado', 'drink', 4.0],
			['nitro cold brew tester', 'drink', 8.0],
		],
		[
			['cheeseburger with fries', 'food', 5.44],
			['cinnamon roll', 'food', 4.99],
			['hot chocolate', 'drink', 2.99],
			['lemon tea', 'drink', 2.5],
			['iced coffee', 'drink', 3.0],
			['vanilla chai latte', 'drink', 4.0],
		],
	].reduce((a, r) => [...a, [...r.map(([n, t, p]) => ({ item: n, type: t, price: p }))]], []),
	[shopA, shopB, shopC] = [
		new CoffeeShop('*** Deep Into Coffee ***', menuA, []),
		new CoffeeShop("*** Xavier's ***", menuB, []),
		new CoffeeShop("*** Tesha's ***", menuC, []),
	];

console.log(shopA.addOrder('cinnamon roll'), 'Order added!');
console.log(shopA.addOrder('iced coffee'), 'Order added!');
console.log(shopA.listOrders(), ['cinnamon roll', 'iced coffee']);
console.log(shopA.dueAmount(), 2.17);
console.log(shopA.fulfillOrder(), 'The cinnamon roll is ready!');
console.log(shopA.fulfillOrder(), 'The iced coffee is ready!');
console.log(shopA.fulfillOrder(), 'All orders have been fulfilled!');
console.log(shopA.addOrder('hot cocoa'), 'This item is currently unavailable!');
console.log(shopA.addOrder('iced tea'), 'This item is currently unavailable!');
console.log(shopA.listOrders(), []);
console.log(shopA.dueAmount(), 0.0);
console.log(shopA.cheapestItem(), 'lemonade');
console.log(shopA.drinksOnly(), [
	'orange juice',
	'lemonade',
	'cranberry juice',
	'pineapple juice',
	'lemon iced tea',
	'apple iced tea',
	'vanilla chai latte',
	'hot chocolate',
	'iced coffee',
]);
console.log(shopA.foodOnly(), [
	'tuna sandwich',
	'ham and cheese sandwich',
	'bacon and egg',
	'steak',
	'hamburger',
	'cinnamon roll',
]);

console.log(shopB.addOrder('cortado'), 'Order added!');
console.log(shopB.fulfillOrder(), 'The cortado is ready!');
console.log(shopB.fulfillOrder(), 'All orders have been fulfilled!');
console.log(shopB.addOrder('avocado toast'), 'Order added!');
console.log(shopB.listOrders(), ['avocado toast']);
console.log(shopB.dueAmount(), 5.05);
console.log(shopB.cheapestItem(), 'espresso');
console.log(shopB.drinksOnly(), ['espresso', 'iced caramel macchiato', 'cortado', 'nitro cold brew tester']);
console.log(shopB.foodOnly(), ['turkey english muffin', 'avocado toast', 'chocolate croissant']);

console.log(shopC.addOrder('hot cocoa'), 'This item is currently unavailable!');
console.log(shopC.dueAmount(), 0.0);
console.log(shopC.addOrder('cheeseburger with fries'), 'Order added!');
console.log(shopC.addOrder('lemon tea'), 'Order added!');
console.log(shopC.addOrder('iced coffee'), 'Order added!');
console.log(shopC.listOrders(), ['cheeseburger with fries', 'lemon tea', 'iced coffee']);
console.log(shopC.dueAmount(), 10.94);
console.log(shopC.fulfillOrder(), 'The cheeseburger with fries is ready!');
console.log(shopC.fulfillOrder(), 'The lemon tea is ready!');
console.log(shopC.fulfillOrder(), 'The iced coffee is ready!');
console.log(shopC.listOrders(), []);
console.log(shopC.cheapestItem(), 'lemon tea');
console.log(shopC.drinksOnly(), ['hot chocolate', 'lemon tea', 'iced coffee', 'vanilla chai latte']);
console.log(shopC.foodOnly(), ['cheeseburger with fries', 'cinnamon roll']);
