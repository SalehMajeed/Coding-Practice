let a = 0;
let sponge = [];


class Box {
	constructor(x, y, z, r) {
		this.pos = createVector(x, y, z);
		this.r = r;
	}

	generate() {
		let boxes = [];
		for (let x = -1; x < 2; x++) {
			for (let y = -1; y < 2; y++) {
				for (let z = -1; z < 2; z++) {
					let sum = abs(x) + abs(y) + abs(z);
					let new_r = this.r / 3;
					if (sum > 1) {
						let b = new Box(this.pos.x + x * new_r, this.pos.y + y * new_r, this.pos.z + z * new_r, new_r);
						boxes.push(b);
					}
				}
			}
		}
		return boxes;
	}
	show() {
		push();
		translate(this.pos.x, this.pos.y, this.pos.z);
		box(this.r);
		pop();
	}
}

function setup() {
	createCanvas(400, 400, WEBGL);
	normalMaterial();

	let b = new Box(0, 0, 0, 200);
	sponge.push(b);
}

function draw() {
	background(51);
	rotateX(a);
	rotateY(a * 0.4);
	rotateZ(a * 0.1);

	for (let i = 0; i < sponge.length; i++) {
		sponge[i].show();
	}
	a += 0.01;
}

function mousePressed() {
	let next = [];
	for (let i = 0; i < sponge.length; i++) {
		let b = sponge[i];
		let new_boxes = b.generate();
        next = next.concat(new_boxes);
	}
	sponge = next;
}
