/* global VisualGameObject, Physics */

function Bounce() {
	this.xDirection = 1;
	this.yDirection = 1;
	this.xSpeed = 50 + Math.random() * 100;
	this.ySpeed = 50 + Math.random() * 100;
	this.snd = new Audio("sounds/beep-03.wav");

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
	this.update = function(dt, context, xScroll, yScroll) {
		Physics.call(this, dt, context, xScroll, yScroll);
	};
};
Bounce.prototype = new VisualGameObject;