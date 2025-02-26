function has_valid_unit_of_measure(product = {}) {
	const { unitOfMeasure, comment } = product;
	return !!comment || unitOfMeasure === 'L' || unitOfMeasure === 'PCE';
}

console.log(has_valid_unit_of_measure({ product: 'Milk', unitOfMeasure: 'L' }));
console.log(has_valid_unit_of_measure({ product: 'Cereals', unitOfMeasure: '' }));
console.log(has_valid_unit_of_measure({ product: 'Beer', unitOfMeasure: false }));
console.log(has_valid_unit_of_measure({ product: 'Beef', unitOfMeasure: 'Cow' }));
