function Rectangle(left, top, width, height) {
	this.left = left || 0;
	this.top = top || 0;
	this.right = left + width || 0;
	this.bottom = top + height || 0;
	return this;
}
Rectangle.prototype.intersects = function ( /*Rectangle*/ other) {
	if (this.right < other.left) return false;
	if (this.bottom < other.top) return false;
	if (this.left > other.right) return false;
	if (this.top > other.bottom) return false;
	return true;
	//return Math.atan2(this.center.y - other.center.y, this.center.x - other.center.x)/Math.PI;
};
