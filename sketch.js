 var car,wall;
 var speed,weight;
 var deformation;

function setup() {
  createCanvas(1000,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(200,150,50,50);
  car.velocityX = speed;
  car.shapeColor = color(255);

  wall = createSprite(900,150,60,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);  

  if(wall.x - car.x < (car.width + wall.width)/2)
  {
     car.velocityX = 0;
     deformation = 0.5 * weight * speed * speed/22509;
     if(deformation > 180)
     {
       car.shapeColor = color = "yellow";
     }
     if(deformation < 180 && deformation > 100)
     {
       car .shapeColor = color = "grey";
     }
     if(deformation < 100) 
     {
       car.shapeColor = color = "red";
     }
  }
  drawSprites();
}