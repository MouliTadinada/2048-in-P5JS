function Cell(x, y, val) {
	this.x = x;
	this.y = y;
	this.v = val;
	this.s;
	if (width < height) {
		this.s = width / 5;
	} else {
		this.s = height / 5;
	}
}

Cell.prototype.show = function () {
	switch (this.v) {
		case 0:
			fill(216, 216, 198);
			break;
		case 2:
			fill(0);
			break;
		case 4:
			fill(0, 25, 51);
			break;
		case 8:
			fill(0, 153, 153);
			break;
		case 16:
			fill(255, 102, 102);
			break;
		case 32:
			fill(224);
			break;
		case 64:
			fill(229, 204, 255);
			break;
		case 128:
			fill(204, 255, 255);
			break;
		case 256:
			fill(204, 255, 204);
			break;
		case 512:
			fill(255, 229, 204);
			break;
		case 1024:
			fill(255, 153, 51);
			break;
		case 2048:
			fill(255, 255, 0);
			break;
	}
	stroke(219, 191, 159);
	strokeWeight(10);
	rectMode(CENTER);
	rect(this.x * this.s, this.y * this.s, this.s, this.s);
	if (this.v > 0) {
		noStroke();
		if (this.v < 32) {
			fill(255);
		} else {
			fill(0);
		}
		textAlign(CENTER, CENTER);
		if (this.v < 1000) {
			textSize(32);
		} else {
			textSize(28);
		}
		text(this.v, this.x * this.s, this.y * this.s);
	}
}

Cell.prototype.setRandomVal = function () {
	var p = random(1);
	if (p < 0.05) {
		this.v = 4;
	} else {
		this.v = 2;
	}
}
