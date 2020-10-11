const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var ground,engine,world;
var turn=0;
var gameState=PLAY;
var count=0;
var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
    
   for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }   
    
}
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(10)
  text("500",30,500);
  textSize(10)
  text("500",110,500);
  textSize(10)
  text("500",190,500);
  textSize(10)
  text("500",270,500);
  textSize(10)
  text("200",350,500);
  textSize(10)
  text("200",430,500);
  textSize(10)
  text("200",510,500);
  textSize(10)
  text("100",590,500);
  textSize(10)
  text("100",670,500);
  textSize(10)
  text("100",750,500);
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles !== null){
      particle.display();
      if(particles.body.position.y>760){
         if(particles.body.position.x<300){
            score = score+500;
            particle=null;
            if(count >= 5)gameState="end";
         }
         if(particles.body.position.x>301 && particles.body.position.x<600){
            score = score+200;
            particle=null;
            if(count >= 5)gameState="end";
         }
         if(particles.body.position.x>601 && particles.body.position.x<900){
            score = score+100;
            particle=null;
            if(count >= 5)gameState="end";
         }
      }}   
}
