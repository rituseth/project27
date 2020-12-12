
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
var world,body;
const Render=Matter.Render;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof1 = new Roof(400,150,10,300)
bobObj1=new Bob(300,400,40);
bobObj2=new Bob(340,400,40);
bobObj3=new Bob(380,400,40)
bobObj4=new Bob(420,400,40)
bobObj5=new Bob(460,400,40)

rope1=new Rope(bobObj1.body,roof1.body);
rope2=new Rope(bobObj2.body,roof1.body);
rope3=new Rope(bobObj3.body,roof1.body);
rope4=new Rope(bobObj4.body,roof1.body);
rope5=new Rope(bobObj5.body,roof1.body);
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });


Render.run(render);
		  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display()
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

upKey();
  drawSprites();
 
}
function upKey()
	{
	if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:100,y:5});
}}




