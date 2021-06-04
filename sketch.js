const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  background1;
var snow01 = []

function preload() {
background1 = loadImage('snow1.jpg'); 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  if(frameCount%60===0){
    for(var i = 0; i<snow01.length;i++){
      snow01.push(new Snow(355,350,50,50))
      console.log('working')
    }
  }
  }

function draw() {
  background(background1);  
  drawSprites();
  if(frameCount%60===0){ 
    snow01.push(new Snow(355,350,50,50)) 
    snow01[i].display() 
  }
}
