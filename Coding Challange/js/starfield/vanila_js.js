class Starfiled {
    constructor() {
        this.create_canvas(300,300)
    }
	create_canvas(width, height) {
		const canvas = document.createElement('canvas');
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);
		canvas.style.backgroundColor = 'black';
		let ctx = canvas.getContext('2d');
		ctx.fillStyle = 'rgb(200,0,0)';
		ctx.fillRect(10, 10, 50, 50);

		ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		ctx.fillRect(30, 30, 50, 50);
		document.body.append(canvas);
	}
}

document.addEventListener('DOMContentLoaded', new Starfiled());
