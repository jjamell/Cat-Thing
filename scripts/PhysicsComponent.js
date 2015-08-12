/* global g_GameObjectManager, canvas  */

function Physics(dt) {
	this.x += dt * this.xV;
	this.y += dt * this.yV;
	var colliders = g_GameObjectManager.gameObjects;
	for (var x in colliders) {
		if (colliders[x] != this && colliders[x].collisionArea && this.zOrder === colliders[x].zOrder) {
			if (this.collisionArea().intersects(colliders[x].collisionArea())) {
				//window.snd.play();
				if(Math.abs(this.x - colliders[x].x) >= Math.abs(this.y - colliders[x].y))
					{
						this.xV *= -1; this.x += dt * this.xV;
						//colliders[x].xV *= -1; 
					}
				if(Math.abs(this.x - colliders[x].x) <= Math.abs(this.y - colliders[x].y))
					{
						this.yV *= -1; this.y += dt * this.yV;
						//colliders[x].yV *= -1;
					}
			}
		}
	}

	if (this.x >= canvas.width - this.image.width) {
		this.x = canvas.width - this.image.width;
		this.xV *= -1;
	}
	else if (this.x <= 0) {
		this.x = 0;
		this.xV *= -1;
	}

	if (this.y >= canvas.height - this.image.height) {
		this.y = canvas.height - this.image.height;
		this.yV *= -1;
	}
	else if (this.y <= 0) {
		this.y = 0;
		this.yV *= -1;
	}
}