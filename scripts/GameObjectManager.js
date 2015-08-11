/* global g_GameObjectManager:true, FPS, SECONDS_BETWEEN_FRAMES, ApplicationManager, requestAnimationFrame */

function GameObjectManager() {
	
	this.gameObjects = new Array();
	this.lastFrame = new Date().getTime();
	this.xScroll = 0;
	this.yScroll = 0;
	this.applicationManager = null;
	/** A reference to the canvas element
	 * @type HTMLCanvasElement
	 */
	this.canvas = null;
	/** A reference to the 2D context of the canvas element
	 * @type CanvasRenderingContext2D
	 */
	this.context2D = null;
	/** A reference to the in-memory canvas used as a back buffer
	 * @type HTMLCanvasElement
	 */
	this.backBuffer = null;
	/** A reference to the backbuffer 2D context
	 * @type CanvasRenderingContext2D
	 */
	this.backBufferContext2D = null;

	/**
	 * Initialises this object
	 * @return A reference to the initialized object
	 */
	this.startupGameObjectManager = function() {
		// set a global pointer to reference this object
		g_GameObjectManager = this;

		// watch for keyboard events
		document.onkeydown = function(event){g_GameObjectManager.keyDown(event);}
		document.onkeyup = function(event){g_GameObjectManager.keyUp(event);}
		
		// get references to the canvas elements and their 2D contexts
		this.canvas = document.getElementById('canvas');
		
		//check if the browser supports the canvas element before doing any crazy 
		//shit so you don't throw a thousand errors in the console
		if (this.canvas.getContext)
		{
		this.context2D = this.canvas.getContext('2d');
		this.backBuffer = document.createElement('canvas');
		this.backBuffer.width = this.canvas.width;
		this.backBuffer.height = this.canvas.height;
		this.backBufferContext2D = this.backBuffer.getContext('2d');
		}

		// create a new ApplicationManager
		this.applicationManager = new ApplicationManager().startupApplicationManager();

		/// setInterval to cal the draw function
		setInterval(function() {
			requestAnimationFrame(
				function(){
			g_GameObjectManager.draw();
					
				})
		}, SECONDS_BETWEEN_FRAMES);

		return this;
	}
	/**
	 * The Render Loop
	 */

	this.draw = function() {
		//calculate the time since the last frame
		var thisFrame = new Date().getTime();
		var dt = (thisFrame - this.lastFrame) / 1000;
		this.lastFrame = thisFrame;

		//clear the drawing contexts
		this.backBufferContext2D.clearRect(0, 0, this.backBuffer.width, this.backBuffer.height);
		this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);

		//first update all the game objects
		for (var x in this.gameObjects) {
			if (this.gameObjects[x].update) {
				this.gameObjects[x].update(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
			}
		}

		//then draw the game objects
		for (var x in this.gameObjects) {
			if (this.gameObjects[x].draw) {
				this.gameObjects[x].draw(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
			}
		}

		//copy the back buffer to the displayed canvas
		this.context2D.drawImage(this.backBuffer, 0, 0);
	};

	/**
	 * Adds a new GameObject to the gameObjects collection
	 * @param gameObject The object to add
	 */
	this.addGameObject = function(gameObject) {
		this.gameObjects.push(gameObject);
		this.gameObjects.sort(function(a, b) {
			return a.zOrder - b.zOrder;
		})
	};

	/**
	 * Removes a game Object from the gameObjects collection
	 * @param gameObject The object to remove
	 */
	this.removeGameObject = function(gameObject) {
		this.gameObjects.removeObject(gameObject);
	}
	
	//send keyDown event to all gameObjects
	this.keyDown = function(event)
	{
		for (var x in this.gameObjects)
		{
			if (this.gameObjects[x].keyDown)
			{
				this.gameObjects[x].keyDown(event);
			}
		}
	}
	
	//send keyUp event to all gameObjects
	this.keyUp = function(event)
	{
		for (var x in this.gameObjects)
		{
			if (this.gameObjects[x].keyUp)
			{
				this.gameObjects[x].keyUp(event);
			}
		}
	}
};
