/**
 * Displays an animated GameObject
 * @author Jacob Jamell
 */
function AnimatedGameObject()
{
	/** Defines the current frame that is to be rendered
	 * @type Number
	 */
	this.currentFrame = 0;
	/** Defines the FPS of the animation
	 * @type Number
	 */
	this.timeBetweenFrames = 0;
	/** The number of individual frames held in the image
	 * @type Number
	 */
	this.frameCount = 0;
	/** Time until the next frame
	 * @type Number
	 */
	this.timeSinceLastFrame = 0;
	/** The width of each individual frame
	 * @type Number
	 */
	this.frameWidth = 0;
	
	/**
	 * Initializes the object
	 * @param image
	 * @param x
	 * @param y
	 * @param z
	 * @param frameCount
	 * @param fps
	 */
	this.startupAnimatedGameObject = function(image, x, y, z, frameCount, fps)
	{
		if (frameCount <= 0) throw "framecount can not be less than zero";
		if (fps <= 0) throw "fps can not be less than zero";
		
		this.startupVisualGameObject(image, x, y, z);
		this.currentFrame = 0;
		this.frameCount = frameCount;
		this.timeBetweenFrames = 1/fps;
		this.timeSinceLastFrame = this.timeBetweenFrames;
		this.frameWidth = this.image.width / this.frameCount;
	}
	
	this.draw = function(dt, context, xScroll, yScroll)
	{
		
		var sourceX = this.frameWidth * this.currentFrame;
		context.drawImage(this.image, sourceX, 0, this.frameWidth, this.image.height, this.x - xScroll, this.y - yScroll, this.frameWidth, this.image.height);
		
		this.timeSinceLastFrame -= dt;
		if (this.timeSinceLastFrame <= 0)
		{
			this.timeSinceLastFrame = this.timeBetweenFrames;
			++this.currentFrame;
			this.currentFrame %= this.frameCount;
		}
	}
}

AnimatedGameObject.prototype = new VisualGameObject;