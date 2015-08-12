/* global GameObjectManager */
var FPS = 60;
var SECONDS_BETWEEN_FRAMES = 1000/FPS;
var g_GameObjectManager = null;
var g_image = new Image();
var g_run = new Image();
var g_back = new Image();
var g_block = new Image();
g_image.src = 'http://lorempixel.com/50/50/cats/';
g_block = 'http://placekitten.com/g/64/48';
g_back = 'http://placekitten.com/g/200/200';
//window.snd = new Audio("sounds/beep-03.wav");

window.onload = init;

function init()
{
	//start the game object manager and all objects under it
	new GameObjectManager().startupGameObjectManager();
	new BounceSpawner().startupBounceSpawner();
}
