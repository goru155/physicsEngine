var car,wall;
var speed,weight;

function setup() {
  createCanvas(900,400);

  car=createSprite(50,200,50,50);
  wall=createSprite(800,200,20,100);
  wall.shapeColor="grey"

  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background("black");

  car.velocityX=speed;

  if(wall.x-car.x < (car.width=wall.width)/2){
    car.velocityX=0;

    var  deformation=0.5*width*speed*sped/22500;
    if(deformation > 180){
      car.shapeColor="red";
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor="yellow";0
    }
    if(deformation < 100){
      car.shapeColor="green";
    }
  }

  drawSprites();
}