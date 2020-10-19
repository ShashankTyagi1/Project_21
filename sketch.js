function setup() {
  thickness=random(22,83);
  speed = random(223,321);
  weight=random(30,52);
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor=color(255,255,255)
}

function draw() {
  background(255,255,255);  
createEdgeSprites();
  if (hasCollided(bullet,wall)) {
bullet.velocityX=0;
var damage=0.5* weight*speed*speed/(thickness*thickness*thickness)
if (damage>10) {

  wall .shapeColor=color(255,0,0);

}

if (damage<10) {


  wall.shapeColor=color(0,255,255);
}




  }
  drawSprites();
}


function hasCollided(lbullet,lwall) {




  bulletRightEdge-lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
return false;

}