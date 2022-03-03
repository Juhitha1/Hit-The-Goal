
var canvas=new fabric.canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h.png", function(Img)
	{
		hole object=Img;
		hole object.ScaleToWidth(50);
		hole object.ScaleToHeight(50);
		hole object.set({
			top:hole_y
			left:hole_x
		})
		canvas.add(hole_object);
	})
	new_image();
}

function new_image()
{
	fabric.img.fromURL("ball.png", function(Img){
		ball object=Img;
		ball object.ScaleToWidth(50);
		ball object.ScaleToHeight(50);
		ball object.set({
			top:ball_y
			left:ball_x
		})
		canvas.add(ball_object);
	})
	new_image();
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

