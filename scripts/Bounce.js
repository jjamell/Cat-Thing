/**
 * A test class to demonstrate the use of the VisualGameObject class
 * @author Jacob Jamell
 * @class
 */
function Bounce() {
	this.xDirection = 1;
	this.yDirection = 1;
	this.xSpeed = 50+Math.random()*100;
	this.ySpeed = 50+Math.random()*100;
	var snd = new Audio("beep-03.wav");

	/**
	 * Initializes this object
	 * @return A reference to the initialized object
	 */
	this.startupBounce = function(image) {
		this.startupVisualGameObject(image, 0, 0, 1);
		return this;
	}
	/**
	 * Updates the object
	 * @param dt The time since the last frame in seconds
	 * @param context The drawing context
	 * @param xScroll The global scrolling value of the x axis
	 * @param yScroll The global scrolling value of the y axis
	 */
	this.update = function(dt, context, xScroll, yScroll){
		this.x += dt * this.xSpeed * this.xDirection;
	for (x in g_GameObjectManager.gameObjects) {
		if (g_GameObjectManager.gameObjects[x].collisionArea && this.id != g_GameObjectManager.gameObjects[x].id && this.zOrder == g_GameObjectManager.gameObjects[x].zOrder) {
			//console.log("fuck")
			if (this.collisionArea().intersects(g_GameObjectManager.gameObjects[x].collisionArea())) {
				//console.log("SHIT")
				snd.play();
				this.xDirection = this.xDirection * -1;
				this.x += dt * this.xSpeed * this.xDirection;
			}
		}
	}
	this.y += dt * this.ySpeed * this.yDirection;
	for (x in g_GameObjectManager.gameObjects) {
		if (g_GameObjectManager.gameObjects[x].collisionArea && this.id != g_GameObjectManager.gameObjects[x].id) {
			//console.log("fuck")
			if (this.collisionArea().intersects(g_GameObjectManager.gameObjects[x].collisionArea())) {
				//console.log("SHIT")
				snd.play();
				this.yDirection = this.yDirection * -1;
				this.y += dt * this.ySpeed * this.yDirection;
			}
		}
	}

	if (this.x >= canvas.width - this.image.width) {
		this.x = canvas.width - this.image.width;
		this.xDirection = -1;
	}
	else if (this.x <= 0) {
		this.x = 0;
		this.xDirection = 1;
	}

	if (this.y >= canvas.height - this.image.height) {
		this.y = canvas.height - this.image.height;
		this.yDirection = -1;
	}
	else if (this.y <= 0) {
		this.y = 0;
		this.yDirection = 1;
	}

	/**
		 * Checks for collisions with other objects and that the object it's colliding with is not itself'
		 
		for (x in g_GameObjectManager.gameObjects) {
			if (g_GameObjectManager.gameObjects[x].collisionArea && this.id != g_GameObjectManager.gameObjects[x].id) {
				//console.log("fuck")
				if (this.collisionArea().intersects(g_GameObjectManager.gameObjects[x].collisionArea())) {
					console.log("SHIT")
				}
			}
		}
		*/

	};
};
Bounce.prototype = new VisualGameObject;
