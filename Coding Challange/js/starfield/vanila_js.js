class Starfiled {
	constructor() {
		this.canvas = null;
		this.width = 300;
        this.height = 300;
        
        
        this.create_canvas();
        for (let i = 0; i < 20; i++){
            const x = this.random(-this.width,this.height)
            const y = this.random(-this.height, this.height);
            const r = this.random(5,10)
            this.create_ellipse(x, y, r)
        }
	}

	create_canvas() {
		this.canvas = document.createElement('canvas');
		this.canvas.setAttribute('width', this.width);
		this.canvas.setAttribute('height', this.height);
		this.canvas.style.backgroundColor = 'black';
		document.body.append(this.canvas);
	}
	create_ellipse(x, y, r) {
		const ctx = this.canvas.getContext('2d');

		ctx.beginPath();
		ctx.ellipse(x, y, r, r, 0, 0, 10, false);
		ctx.fillStyle = 'white';
		ctx.fill();
		ctx.stroke();
	}

	random(min, max) {
		min = Math.ceil(min);
        max = Math.floor(max);
        let random_number = Math.floor(Math.random() * (max - min + 1) + min)
        return random_number >= 0 ? random_number : -(random_number)
    }
}

document.addEventListener('DOMContentLoaded', new Starfiled());
