function Rectangle()
{
	this.left =		0;
	this.top =		0;
	this.width = 	0;
	this.height = 	0;
	this.center	=	{	x: 0 ,	
						y: 0
					};
	
	this.startupRectangle = function(left,top,width,height)
	{
		this.left	= 	left;
		this.top	=	top;
		this.right	=	left+width;
		this.bottom	=	top+height;
		this.center.x	=	left + width/2;
		this.center.y	=	top + width/2;
		return this;
	}
	
	this.intersects = function(/*Rectangle*/ other)
	{
		if (this.right < other.left)	return false;
		if (this.bottom < other.top)	return false;
		if (this.left > other.right)	return false;
		if (this.top > other.bottom)	return false;
			
		return true;
		//return Math.atan2(this.center.y - other.center.y, this.center.x - other.center.x)/Math.PI;
		
	}
}
