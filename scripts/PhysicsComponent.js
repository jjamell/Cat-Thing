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
						this.xV 		= this.xV + colliders[x].xV;   //Add swap
						colliders[x].xV	= this.xV - colliders[x].xV; 
						this.xV 		= this.xV - colliders[x].xV;
						
						this.x += dt * this.xV / 2;
						colliders[x].x += dt * colliders[x].x / 2;
						//colliders[x].xV *= -1; 
					}
				if(Math.abs(this.x - colliders[x].x) <= Math.abs(this.y - colliders[x].y))
					{
						this.yV 		= this.yV + colliders[x].yV;   //Add swap
						colliders[x].yV	= this.yV - colliders[x].yV; 
						this.yV 		= this.yV - colliders[x].yV;
						
						this.y += dt * this.yV / 2;
						colliders[x].y += dt * colliders[x].yV /2;
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