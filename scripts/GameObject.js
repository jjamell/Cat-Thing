/**
 * The base class for all game elements
 * @author Some guy
 * @class
 */

function GameObject()
{	
	/**
	 * Object ID.  Used to distinguish objects from each other and identify themselves
	 * @type Number
	 */
	this.id = Math.random();
	
	/** Display depth order. A smaller zOrder = rendered first = furthest in the background.
	 * @type Number
	 */
	this.zOrder = 0;
	/** The position on the X axis
	 * @type Number
	 */
	this.x = 0;
	/** The position on the Y axis
	 * @type Number
	 */
	this.y = 0;
	
	/**
	 * Initializes the object, and adds it to the list of objects held by the GameObjectManager.
	 * @param x		The position on the X axis
	 * @param y		The position on the Y axis
	 * @param z		The z order of the element (smaller zOrder is furthest back)
	 */
	this.startupGameObject = function(/**Number*/ x, /**Number*/ y, /**Number*/ z)
	{
		this.id = Math.random();
		this.zOrder = z;
		this.x = x;
		this.y = y;
		g_GameObjectManager.addGameObject(this);
		return this;
	}
	
	/**
	 * Cleans up the object, and removes it from the list of objects held by the GameObjectManager.
	 */
	this.shutdownGameObject = function()
	{
		g_GameObjectManager.removeGameObject(this);
	}
}
