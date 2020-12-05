const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, runner;

function preload() {
  backgroundImg = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(1280,600);
  
  runner = createSprite(640, 300, 100, 100);
 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(640, 580, 1280, 20);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  ground.display();

  drawSprites();
}