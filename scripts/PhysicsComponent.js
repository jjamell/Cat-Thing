/* global g_GameObjectManager, canvas  */

function Physics(dt) {
	this.x += dt * this.xV;
	this.y += dt * this.yV;
	var colliders = g_GameObjectManager.gameObjects;
	var collider = collision.call(this, colliders);
	if (collider) {
		if(Math.abs(this.x - collider.x) >= Math.abs(this.y - collider.y))
			{
				this.xV 	= this.xV + collider.xV;   //Add swap
				collider.xV	= this.xV - collider.xV; 
				this.xV 	= this.xV - collider.xV;
				
				this.x	+=	dt* this.xV;
				collider.x+=dt* collider.xV;
			}
		if(Math.abs(this.x - collider.x) <= Math.abs(this.y - collider.y))
			{
				this.yV 	= this.yV + collider.yV;   //Add swap
				collider.yV	= this.yV - collider.yV; 
				this.yV 	= this.yV - collider.yV;
				
				this.y 	+=	dt* this.yV;
				collider.y+=dt* collider.yV;
			}
	}
	
	function collision(colliders){
		for(var x in colliders)
			if (colliders[x] != this && colliders[x].collisionArea && this.zOrder === colliders[x].zOrder)
				if (this.collisionArea().intersects(colliders[x].collisionArea()))
					return colliders[x];
		return false;
	}

	if (this.x >= canvas.width - this.image.width) {
		this.x = canvas.width - this.image.width;
		this.xV = Math.abs(this.xV) * -1;
	}
	else if (this.x <= 0) {
		this.x = 0;
		this.xV = Math.abs(this.xV);
	}

	if (this.y >= canvas.height - this.image.height) {
		this.y = canvas.height - this.image.height;
		this.yV = Math.abs(this.yV) * -1;
	}
	else if (this.y <= 0) {
		this.y = 0;
		this.yV = Math.abs(this.yV);
	}
}