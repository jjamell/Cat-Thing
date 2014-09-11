const FPS = 12;
var x = 0;
var y = 0;
var xVelocity = 1;
var yVelocity = 1;
var image = new Image();
var canvas = null;
var ctx = null;

window.onload = init;

function init() {"use strict";
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	setInterval(draw, 1000 / FPS);
	//draw();
}

function draw() {"use strict";
	//ctx.clearRect(0,0,canvas.width,canvas.height);
	var tileSize = 32;
	//console.log("Map height:"+grid.length+" width:"+grid[0].length);
	//ctx.rotate(0.01);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var centerY = canvas.height / 2;
	var centerX = canvas.width / 2;
	for (var y = 0; y < grid.length; y++) {
		for (var x = 0; x < grid[y].length; x++) {
			if (grid[y][x]) {
				//console.log(y, x);
				//ctx.fillStyle = "rgb(100,0,100)";
				//ctx.fillRect((tileSize * x) - centerX, (tileSize * y) - centerY, tileSize, tileSize);
				ctx.drawImage(image, image.width * x, image.height * y);
				//x,y,xsize,ysize
			}
		}
	}

}

image.src = 'http://profile.ak.fbcdn.net/hprofile-ak-snc4/275746_1028520111_720126043_q.jpg'; 