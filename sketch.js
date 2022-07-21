const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;
//Create multiple bobs, mulitple ropes varibale here
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	
	bob1 = new Bob(400, 300, 20);
	bob2 = new Bob(350, 300, 20);
	bob3 = new Bob(300, 300, 20);
	bob4 = new Bob(450, 300, 20);
	bob5 = new Bob(500, 300, 20);

	rope1 = new Rope(bob1, roof, 0, 0);
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope1.display();

  
  //create ellipse shape for multiple bobs here
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
