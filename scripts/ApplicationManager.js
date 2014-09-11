/**
 * The ApplicationManager used to manage the application itself
 * @author Jacob Jamell
 * @class
 */
 
 
function ApplicationManager() {
	/**
	 * Initializes this object
	 * @return A reference to the initialized object
	 */
	this.startupApplicationManager = function() {
		//
		
		this.startupGameObject();
		//this.background = new RepeatingGameObject().startupRepeatingGameObject(g_image, 0, 0, -1, canvas.width, canvas.height, 1);
		//this.bounce = new Bounce().startupBounce(g_run);
		//this.level = new Level().startupLevel();
		//this.runner = new AnimatedGameObject().startupAnimatedGameObject(g_run, 300, 200, 2, 10, 20);
		//this.bitch = new Player().startupPlayer(g_run, 300, 200, 2, 10, 20);
		return this;
	}
	/**
	 * Updates the object
	 * @param dt The Time since the last frame in seconds
	 * @param context The drawing context
	 * @param xScroll The global scrolling value of the x axis
	 * @param yScroll The global scrolling value of the y axis
	 */
	this.update = function(dt, context, xScroll, yScroll)
	{
		//g_GameObjectManager.xScroll += 10 * dt;
	}
}
ApplicationManager.prototype = new GameObject;