var bullet,wall;
var speed,weight;
var Damage;
var thickness;


function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50,200,50,5);
 bullet.shapeColor="white"
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  drawSprites();
 bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
    Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(Damage<10){
     wall.shapeColor="green";
    }
    if(Damage>10){
     bullet.shapeColor="red";
    }
    

  }
}
function hasCollided(bullet,wall){
if( wall.x - bullet.x < wall.width/2 + bullet.width/2){
  return true;
}
else{
  return false;
}
}