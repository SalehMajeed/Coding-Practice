function plant_trees(w, l, g) {
	const len = 2 * (w + l - 2);
	return +!(len % ++g) && len / g;
}

let w, l, g;
(w = 3), (l = 3), (g = 1);
console.log(plant_trees(w, l, g));

(w = 3), (l = 3), (g = 3);
console.log(plant_trees(w, l, g));

(w = 3), (l = 3), (g = 2);
console.log(plant_trees(w, l, g));

(w = 3), (l = 3), (g = 0);
console.log(plant_trees(w, l, g));
