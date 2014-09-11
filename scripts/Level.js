/**
 * @author Jacob
 */
function Level()
{
	this.blocks = new Array();
	this.blockWidth = 64;
	this.blockHeight = 48;
	
	/**
	 * Init object
	 */
	this.startupLevel = function ()
	{
		this.blocks[0] = 3;
		this.blocks[1]=2;
		this.blocks[2]=1;
		this.blocks[3]=1;
		this.blocks[4]=1;
		this.blocks[5]=1;
		this.blocks[6]=1;
		this.blocks[7]=1;
		this.blocks[8]=2;
		this.blocks[9]=3;
		
		this.addBlocks();
		
		return this;
	}
	
	/**
	 * Adds the blocks to the screen by creating VisualGameObjects
	 */
	this.addBlocks = function()
	{
		for (var x = 0; x < this.blocks.length; ++x)
		{
			for (var y = 0; y < this.blocks[x]; ++y){
				new VisualGameObject().startupVisualGameObject(g_block, x * this.blockWidth, 400-(y+1)*this.blockHeight, 4);
			}
		}
	}
	
	/**
	 * @return 		The block under the specified X position
	 * @param x		The x position to test
	 */
	this.currentBlock = function(x)
	{
		return parseInt(x / this.blockWidth);
	}
	
	/**
	 * @return		The height of the ground under the specified block
	 * @param blockIndex	The block number
	 */
	this.groundHeight = function(blockIndex)
	{
		if (blockIndex < 0 || blockIndex > this.blocks.length) return 0;
		
		return this.blocks[blockIndex] * this.blockHeight;
	}
	
	
}
