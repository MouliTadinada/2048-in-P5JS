var t048;
var start;
var end;

function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10);
	t048 = new Board(4, 4);
	t048.insertElement();
}

function draw() {
	background(51);
	t048.show();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		t048.up();
	} else if (keyCode == DOWN_ARROW) {
		t048.down();
	} else if (keyCode == LEFT_ARROW) {
		t048.left();
	} else if (keyCode == RIGHT_ARROW) {
		t048.right();
	}
	t048.insertElement();
}

function mousePressed() {
	start = createVector(mouseX, mouseY);
}

function mouseReleased() {
	end = createVector(mouseX, mouseY);
	fill(255, 0, 0);
	stroke(255, 0, 0);
	strokeWeight(10);
	line(start.x, start.y, end.x, end.y);
	var widthDiff, heightDiff;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		widthDiff = 10;
		heightDiff = 10;
	} else {
		widthDiff = width / 4;
		heightDiff = height / 4;
	}
	var moved = false;
	if (start.x - end.x > widthDiff) {
		t048.left();
		moved = true;
	} else if (end.x - start.x > widthDiff) {
		t048.right();
		moved = true;
	} else if (start.y - end.y > heightDiff) {
		t048.up();
		moved = true;
	} else if (end.y - start.y > heightDiff) {
		t048.down();
		moved = true;
	}
	if (moved) {
		t048.insertElement();
	}
}
