//create a namespace
const MEngine = Matter.Engine;
const MBodies = Matter.Bodies;
const MWorld = Matter.World;

var myEngine, myWorld;
var rect1;
var ground;

function setup(){
  var canvas=createCanvas(400,400);
  //create an engine
  myEngine = MEngine.create();
  //create a world 
  myWorld = myEngine.world;
  //create physic properties for yjr body
  var opts = {
    isStatic: false, 
    restitution: 0.8

  };
//create a rectangluar body
  rect1 = MBodies.rectangle(200,200,40,50,opts);
  //added the rectangle to the world.
  MWorld.add(myWorld,rect1);
  console.log(rect1);
  var opts1={
    isStatic: true
  };
  ground=MBodies.rectangle(200,380,400,20,opts1);
  MWorld.add(myWorld,ground);
}
function draw()
{
  background(0);
  //update our engine
  MEngine.update(myEngine);
  rectMode(CENTER);
    rect(rect1.position.x,rect1.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20)
}
