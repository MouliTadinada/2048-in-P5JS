function Board(cols, rows) {
	this.c = cols;
	this.r = rows;


	this.grid = new Array(4);
	for (i = 0; i < 4; i++) {
		this.grid[i] = new Array(this.r);
	}
	this.resetGame();
}

Board.prototype.show = function () {
	translate(100, 100);
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			this.grid[i][j].show();
		}
	}
}

Board.prototype.resetGame = function () {
	var i, j;
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			this.grid[i][j] = new Cell(i, j, 0);
		}
	}
}

Board.prototype.insertElement = function () {
	var x = floor(random(4));
	var y = floor(random(4));
	//console.log(x, y, grid[x][y].v);
	if (this.grid[x][y].v == 0) {
		this.grid[x][y].setRandomVal();
	} else {
		this.insertElement();
	}
}

Board.prototype.moveLeft = function () {
	var i, j, k;

	for (j = 0; j < 4; j++) {
		i = k = 0;
		while (i < 4) {
			if (this.grid[i][j].v == 0 && this.grid[k][j].v != 0) {
				k = i;
			} else if (this.grid[i][j].v != 0 && this.grid[k][j].v == 0) {
				this.grid[k][j].v = this.grid[i][j].v;
				this.grid[i][j].v = 0;
				i--;
			}
			i++;
		}
	}
}

Board.prototype.moveRight = function () {
	var i, j, k;
	for (j = 0; j < 4; j++) {
		i = k = 3;
		while (i >= 0) {
			if (this.grid[i][j].v == 0 && this.grid[k][j].v != 0) {
				k = i;
			} else if (this.grid[i][j].v != 0 && this.grid[k][j].v == 0) {
				this.grid[k][j].v = this.grid[i][j].v;
				this.grid[i][j].v = 0;
				i++;
			}
			i--;
		}
	}
}

Board.prototype.moveUp = function () {
	var i, j, k;
	for (i = 0; i < 4; i++) {
		j = k = 0;
		while (j < 4) {
			if (this.grid[i][j].v == 0 && this.grid[i][k].v != 0) {
				k = j;
			} else if (this.grid[i][j].v != 0 && this.grid[i][k].v == 0) {
				this.grid[i][k].v = this.grid[i][j].v;
				this.grid[i][j].v = 0;
				j--;
			}
			j++;
		}
	}
}

Board.prototype.moveDown = function () {
	var i, j;
	for (i = 0; i < 4; i++) {
		j = 3;
		var k = 3;
		while (j >= 0) {
			if (this.grid[i][j].v == 0 && this.grid[i][k].v != 0) {
				k = j;
			} else if (this.grid[i][j].v != 0 && this.grid[i][k].v == 0) {
				this.grid[i][k].v = this.grid[i][j].v;
				this.grid[i][j].v = 0;
				j++;
			}
			j--;
		}
	}
}

Board.prototype.addLeft = function () {
	for (var j = 0; j < 4; j++) {
		var i = 0;
		while (i < 3) {
			if (this.grid[i][j].v == this.grid[i + 1][j].v) {
				this.grid[i][j].v *= 2;
				this.grid[i + 1][j].v = 0;
				i++;
			}
			i++;
		}
	}
}

Board.prototype.addRight = function () {
	for (var j = 0; j < 4; j++) {
		var i = 3;
		while (i > 0) {
			if (this.grid[i - 1][j].v == this.grid[i][j].v) {
				this.grid[i][j].v *= 2;
				this.grid[i - 1][j].v = 0;
				i--;
			}
			i--;
		}
	}
}

Board.prototype.addUp = function () {
	for (var i = 0; i < 4; i++) {
		var j = 0;
		while (j < 3) {
			if (this.grid[i][j].v == this.grid[i][j + 1].v) {
				this.grid[i][j].v *= 2;
				this.grid[i][j + 1].v = 0;
				j++;
			}
			j++;
		}
	}
}

Board.prototype.addDown = function () {
	for (var i = 0; i < 4; i++) {
		var j = 3;
		while (j > 0) {
			if (this.grid[i][j].v == this.grid[i][j - 1].v) {
				this.grid[i][j].v *= 2;
				this.grid[i][j - 1].v = 0;
				j--;
			}
			j--;
		}
	}
}

Board.prototype.up = function () {
	this.moveUp();
	this.addUp();
	this.moveUp();
}

Board.prototype.down = function () {
	this.moveDown();
	this.addDown();
	this.moveDown();
}

Board.prototype.left = function () {
	this.moveLeft();
	this.addLeft();
	this.moveLeft();
}

Board.prototype.right = function () {
	this.moveRight();
	this.addRight();
	this.moveRight();
}
