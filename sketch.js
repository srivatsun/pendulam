
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulam1,pendulam;
var band1;


function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

pendulam1 = new Pendulam(100,100);
band1 = new Sling(pendulam1.body,{x:100,y:100})
pendulam2 = new Pendulam(200,100);
band2 = new Sling(pendulam2.body,{x:200,y:100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  pendulam1.display();
  pendulam2.display();
band1.display();
band2.display();
mouseDragged();
 
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(pendulam1.body,{x:mouseX,y:mouseY})
}


