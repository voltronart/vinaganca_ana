const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world

var ground;

var backgroundImg;

var tower,towerImg;

var cannonball;


var cannon

var angle;

var ballmat = [];

function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);

  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);


 angleMode(DEGREES);
 angle = 20
 cannon = new Cannon(180,110,130,100,angle);
  
}

function draw() {
  background(190);

  
  

  rect(ground.position.x,ground.position.y,width*2,1);

  image(backgroundImg,0,0,1200,600);

  push()
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop()
 
  cannon.display();
  
 for(var i = 0;i<ballmat.length;i++){
   showcannonball(ballmat[i],i);
 }
 
  Engine.update(engine);
}
function keyPressed(){
if(keyCode===DOWN_ARROW&&ballmat.length){
  var cannonball = new Ballcannon(cannon.x,cannon.y);
  cannonball.trajetory = [];
  ballmat.push(cannonball);
  
}


}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    ballmat[ballmat.length-1].shoot();
    

  }
}

function showcannonball(ball,i){
if(ball){
  ball.display();
}

}