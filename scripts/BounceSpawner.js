/**
 * Spawns bouncers when clear of obstacles.  Not visible.
 * @author Jacob Jamell
 * @class
 */
function BounceSpawner() {

	/**
	 * Initializes this object
	 * @return A reference to the initialized object
	 */
	this.startupBounceSpawner = function(image) {
		this.startupGameObject(0, 0, 1);
		return this;
	}
	/**
	 * Updates the object
	 * @param dt The time since the last frame in seconds
	 * @param context The drawing context
	 * @param xScroll The global scrolling value of the x axis
	 * @param yScroll The global scrolling value of the y axis
	 */
	this.update = function(dt, context, xScroll, yScroll) {

		for (x in g_GameObjectManager.gameObjects) {
			if (g_GameObjectManager.gameObjects[x].collisionArea && this.id != g_GameObjectManager.gameObjects[x].id) {
				//console.log("fuck")
				if (this.collisionArea().intersects(g_GameObjectManager.gameObjects[x].collisionArea())) {
					console.log("SHIT");
					new Bounce().startupBounce(g_image);
				}
			}
		}

	}
};
Bounce.prototype = new GameObject;
