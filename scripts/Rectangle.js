/**
 * A rectangle
 * @author Jacob
 * @class
 */
function Rectangle()
{
	this.left = 0;
	this.top = 0;
	this.width = 0;
	this.height = 0;
	
	/**
	 *  Initializes the object
	 * @param left		Left Position
	 * @param top		Top Position
	 * @param width		Width of rectangle
	 * @param height	Height of Rectangle
	 */
	this.startupRectangle = function(/**Number*/ left,/**Number*/ top,/**Number*/ width,/**Number*/ height)
	{
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
		return this;
	}
	
	/**
	 * @return	True if there is an intersection, false if not
	 * @param other	The other rectangle to test against
	 */
	this.intersects = function(/**Rectangle*/ other)
	{
		if (this.left + this.width < other.left)
			return false;
		if (this.top + this.height < other.top)
			return false;
		if (this.left > other.left + other.width)
			return false;
		if (this.top > other.top + other.height)
			return false;
			
		return true;
		
	}
}
