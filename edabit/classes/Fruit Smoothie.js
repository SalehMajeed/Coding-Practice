const prices = {
	Strawberries: 1.5,
	Banana: 0.5,
	Mango: 2.5,
	Blueberries: 1.0,
	Raspberries: 1.0,
	Apple: 1.75,
	Pineapple: 3.5,
};

class Smoothie {
	constructor(ingredients) {
		this.ingredients = ingredients;
		this.cost = this.ingredients.reduce((acc, val) => (acc += prices[val]), 0);
	}
	getCost() {
		return '$' + this.cost.toFixed(2);
	}
	getPrice() {
		return '$' + this.cost * (2.5).toFixed(2);
	}
	getName() {
		const res = this.ingredients.sort().join(' ');
		const type = this.ingredients.length > 1 ? ' Fusion' : ' Smoothie';
		return res.replace(/berries/gi, 'berry') + type;
	}
}

const s1 = new Smoothie(['Banana']),
	s2 = new Smoothie(['Raspberries', 'Strawberries', 'Blueberries']),
	s3 = new Smoothie(['Mango', 'Apple', 'Pineapple']),
	s4 = new Smoothie(['Pineapple', 'Strawberries', 'Blueberries', 'Mango']),
	s5 = new Smoothie(['Blueberries']);

console.log(s1.ingredients, ['Banana']);
console.log(s1.getCost(), '$0.50');
console.log(s1.getPrice(), '$1.25');
console.log(s1.getName(), 'Banana Smoothie');
console.log(s2.ingredients, ['Raspberries', 'Strawberries', 'Blueberries']);
console.log(s2.getCost(), '$3.50');
console.log(s2.getPrice(), '$8.75');
console.log(s2.getName(), 'Blueberry Raspberry Strawberry Fusion');
console.log(s3.ingredients, ['Mango', 'Apple', 'Pineapple']);
console.log(s3.getCost(), '$7.75');
console.log(s3.getPrice(), '$19.38');
console.log(s3.getName(), 'Apple Mango Pineapple Fusion');
console.log(s4.ingredients, ['Pineapple', 'Strawberries', 'Blueberries', 'Mango']);
console.log(s4.getCost(), '$8.50');
console.log(s4.getPrice(), '$21.25');
console.log(s4.getName(), 'Blueberry Mango Pineapple Strawberry Fusion');
console.log(s5.ingredients, ['Blueberries']);
console.log(s5.getCost(), '$1.00');
console.log(s5.getPrice(), '$2.50');
console.log(s5.getName(), 'Blueberry Smoothie');
