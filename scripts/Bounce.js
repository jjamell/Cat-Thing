/* global VisualGameObject, Physics */

function Bounce() {
	this.xV = 50 + Math.random() * 100;
	this.yV = 50 + Math.random() * 100;
	/**
	 * Initializes this object
	 * @return A reference to the initialized object
	 */
	this.startupBounce = function() {
		var	image = new Image();
		image.src = "http://lorempixel.com/50/50/cats/";
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
		Physics.call(this, dt);
	};
};
Bounce.prototype = new VisualGameObject;