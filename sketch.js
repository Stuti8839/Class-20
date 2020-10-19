var fixedRectangle, movingRectangle;
function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(200,300,20,20);
  fixedRectangle.shapeColor = "green";

  movingRectangle = createSprite(20,20,20,20);
  movingRectangle.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  if(fixedRectangle.width/2 + movingRectangle.width/2 > fixedRectangle.x - movingRectangle.x && 
    fixedRectangle.width/2 + movingRectangle.width/2 > movingRectangle.x - fixedRectangle.x &&
    fixedRectangle.height/2 + movingRectangle.height/2 > fixedRectangle.y - movingRectangle.y &&
    fixedRectangle.height/2 + movingRectangle.height/2 > movingRectangle.y - fixedRectangle.y) {
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }
  else {
    fixedRectangle.shapeColor = "green";
    movingRectangle.shapeColor = "green";
  }
  drawSprites();
}