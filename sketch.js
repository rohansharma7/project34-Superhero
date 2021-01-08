const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImage;

function preload() 
{
  backgroundImage = loadImage("GamingBackground.png");
}

function setup() 
{
  createCanvas(3000, 800);

 engine = Engine.create();
 world = engine.world;
  // create sprites here

  ground = new Ground(1500,800,3000,50);

  hero = new Hero(1500,300,20);

  fly = new Fly(hero.body, {x:1500,y:300});


}

function draw() 
{
  background(backgroundImage);

  ground.display();

  hero.display();

  fly.display();

  mouseDragged();

}

function mouseDragged()
{
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}

