/**
 *	A database for external resources
 * 	@author	Jacob Jamell
 * 	@class 
 */

function ResourceManager()
{
	/**
	 *	An array of the names of images supplied to the startupResourceManager function.
	 * Since images are referenced by creating new properties of the ResourceManager class, 
	 * this collection allows a dev to know which properties are images (or not)
	 * @type Array
	 */
	this.imageProperties = null;
	
	/**
	 *	Init this object
	 * @param images	An array of objects with name and src properties
	 * @return			A reference to the initialized object 
	 */
	
	this.startupResourceManager() = function(/**Array*/ images)
	{
		//set the global variable
		g_ResourceManager = this;
		
		//init internal states
		this.imageProperties = new Array();
		
		//for each image, call preload()
		for (var i = 0; i < images.length; i++)
		{
			//create new Image object and add to array
			var thisImage = new Image;
			this[images[i].name] = thisImage;
			this.imageProperties.push(images[i].name);
			
			//assign the .src property of the Image object
			thisImage.src = images[i].src;
		}
		
		return this;
	}
}
