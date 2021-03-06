"use strict";
let calc = new Calc();
let gfx  = new Graphics();
let kbd  = new Keyboard();
let ms   = new Mouse();
let ajax = new AJAX();
let sfx = new Audio();
// Create variables here.
let pizzaNum = 3;
const funny = false;
let shoeSizes = [ 3,12,6 ];
let pl = new Player();

window.onload = function()
{
	const FPS = 30;
	setInterval( function()
	{
		if( gfx.Loaded() )
		{
			Update();
			Draw();
		}
		else
		{
			gfx.PlayIntro();
		}
	},1000 / FPS );
	
	Init();
	console.log( document.getElementById( "ver" ).innerHTML + " has loaded successfully!" );
};

function Init()
{
	gfx.Init();
	kbd.Init();
	ms.Init( gfx.canvas );
	// \/ Initialize things! \/
	pl.Init();
	
}

function Update()
{
	// \/ Update things here. \/
	pl.Update();
	
}

function Draw()
{
	gfx.DrawRect( 0,0,gfx.ScreenWidth,gfx.ScreenHeight,"#000" );
	// \/ Draw things here. \/
	pl.Draw();
	
}
