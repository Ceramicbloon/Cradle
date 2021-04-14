
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bar1 = new Ground (400, 150, 600, 40)
	ball1 = new Ball(400, 500, 40)
	ball2 = new Ball(320, 500, 40)
	ball3 = new Ball(480, 500, 40)
	ball4 = new Ball(240, 500, 40)
	ball5 = new Ball(560, 500, 40)
	rope1 = new rope(ball1.body, bar1.body, 0, 0)
	rope2 = new rope(ball2.body, bar1.body, -80, 0)
	rope3 = new rope(ball3.body, bar1.body, 80, 0)
	rope4 = new rope(ball4.body, bar1.body, -160, 0)
	rope5 = new rope(ball5.body, bar1.body, 160, 0)
	

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball4.body, ball4.body.position, {x:-500, y:0})
	}
		
}

function draw() {
  rectMode(CENTER);
  background("#A9A9A9");
  bar1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display()
  rope2.display()
  rope3.display();
  rope4.display()
  rope5.display();
  drawSprites();
 
}



