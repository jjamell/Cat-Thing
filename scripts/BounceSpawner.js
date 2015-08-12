/* global g_GameObjectManager, GameObject, Bounce, g_image */
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
		this.startupGameObject(0, 0, 20);
		return this;
	}
	/**
	 * Updates the object
	 * @param dt The time since the last frame in seconds
	 * @param context The drawing context
	 * @param xScroll The global scrolling value of the x axis
	 * @param yScroll The global scrolling value of the y axis
	 */
	this.update = function() {
		if (g_GameObjectManager.gameObjects.length > 100) return;
		for (var x in g_GameObjectManager.gameObjects) {
			if (g_GameObjectManager.gameObjects[x].collisionArea && this != g_GameObjectManager.gameObjects[x]) {
				//console.log("fuck")
				if (this.collisionArea().intersects( g_GameObjectManager.gameObjects[x].collisionArea() ) ) {
					return;
				}
			}
		}
		new Bounce().startupBounce(g_image);

	}
	
	this.collisionArea = function()
	{
		return new Rectangle().startupRectangle(this.x, this.y, 50, 50);
	}
};
BounceSpawner.prototype = new GameObject;
