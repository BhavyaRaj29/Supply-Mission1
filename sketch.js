var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var basketLine1,basketLine2,basketLine3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	basketLine1=createSprite(500,610,20,100);
	basketLine1.shapecolor=color("grey");

	basketLine2=createSprite(300,610,20,100);
	basketLine2.shapecolor=color("grey");
	
	basketLine3=createSprite(400,650,200,20);
	basketLine3.shapecolor=color("grey");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 basketLine1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, basketLine1);
	 
	 basketLine2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, basketLine2);
	 
	 basketLine3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, basketLine3);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	console.log("down")
	Matter.Body.setStatic(packageBody, false);
	   
	
  }

    
  }




