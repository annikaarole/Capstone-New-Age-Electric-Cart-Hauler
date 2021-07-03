var scene;
var stationImage, wallImage, lawnImage, treeImage, dollyImage, cartImage ,carImage, backgroundImage;

function preload(){
  
  stationImage = loadImage("station.png");
  wallImage = loadImage("wall.png");
  lawnImage = loadImage("lawn.jpg");
  treeImage = loadImage("tree.png");
  dollyImage = loadImage("Dolly.png");
  cartImage = loadImage("cart.png");
  carImage = loadImage("car.png");
}

function setup() {
  createCanvas(800, 500);
  
  //creating background
  scene = createSprite(0,0,800,500);
  scene.addImage(lawnImage);
  scene.scale = 3; 

  station = createSprite(5,460,50,50);
  station.addImage(stationImage);
  station.scale = 0.2;

  dolly = createSprite(35,465,50,50);
  dolly.addImage(dollyImage);
  dolly.scale = 0.3;

  dollydestination = createSprite(775,50,50,50);
  dollydestination.addImage(dollyImage);
  dollydestination.scale = 0.3;

  cart = createSprite(35,465,50,50);
  cart.addImage(cartImage);
  cart.scale = 0.1;

  cartA = createSprite(35,265,50,50);
  cartA.addImage(cartImage);
  cartA.scale = 0.1;

  cartB = createSprite(35,265,50,50);
  cartB.addImage(cartImage);
  cartB.scale = 0.1;

  cartC = createSprite(235,265,50,50);
  cartC.addImage(cartImage);
  cartC.scale = 0.1;

  cartD = createSprite(235,50,50,50);
  cartD.addImage(cartImage);
  cartD.scale = 0.1;

  cartE = createSprite(775,50,50,50);
  cartE.addImage(cartImage);
  cartE.scale = 0.1;

  car = createSprite(455,275,50,70);
  car.addImage(carImage);
  car.scale = 0.25;

  wall = createSprite(560,465,50,70);
  wall.addImage(wallImage);
  wall.scale = 0.25;

  tree = createSprite(400,460,50,70);
  tree.addImage(treeImage);
  tree.scale = 0.08;

  treeright = createSprite(720,460,50,70);
  treeright.addImage(treeImage);
  treeright.scale = 0.08;

}


function draw() {
 background(0);

 /*
cartA.x = World.mouseX;
cartA.y = World.mouseY;
*/

 drawSprites();

 text("NEW AGE ELECTRIC CART HAULER",10,10);
 text("TIME: 5 AM ET",10,20);
 text("DAY: FRIDAY",10,30);
 text("STATUS: READY TO HAUL!",10,40);
 text("SPEED: 3 MPH!", 10, 50);


  }
   