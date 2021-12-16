
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var monster ;

function preload (){

 monster = loadImage('monster.png');



}
function setup() {
  createCanvas(600,700);

  engine = Engine.create();
  world = engine.world;
  
  monster = createSprite(200,200,100,100);
  monster.scale = 0.2;

}


function draw() 
{
  background(51);
  Engine.update(engine);

monster.show;
  
}

