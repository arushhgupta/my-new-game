var bgimg;
var bg;
var alien , bullets;
var bulletsgroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var aliensgroup ;

function preLoad() {
  //bgimg = loadImage ("Planet.jpg");
  }

function setup() {
  createCanvas(800,400);
  Human = createSprite (400,380, 20, 20);
  //bg = createSprite (0,0);
 // bg.addImage ("abc",bgimg);
 bulletsgroup = new Group();
 aliensgroup = new Group();


}



function draw() {
  background("red");
  Human.velocityX = 0;
  Human.velocityY = 0;
  
  
  if (bulletsgroup.isTouching (Human)){
    gameState = END;
}
  
if (gameState === PLAY){
    if (keyDown("LEFT_ARROW")){
      Human.velocityX = -2;
      Human.velocityY= 0;
    }
    if (keyDown ("RIGHT_ARROW")){
      Human.velocityX = 2;
      Human.velocityY = 0;
      
  }
}
  else if(gameState === END){
    alien.velocityX =0;
    alien.velocityY = 0;
    bulletsgroup.setVelocityXEach(0);
    bulletsgroup.setVelocityYEach(0);
    bulletsgroup.destroyEach();
    aliensgroup.destroyEach();
    textSize (30);
    fill ('black');
    text ("GAME OVER",300,200);


  }

  
enemy();
abc();
  

  drawSprites();
  

}
function enemy (){
if (frameCount % 60 === 0){
  alien = createSprite(10 ,100, 20, 20);
  alien.velocityX = 3;
  aliensgroup.add(alien);
  
  

}
}
function abc(){
  if (frameCount % 20 === 0){
    bullet = createSprite(10, 100, 5, 10);
    bullet.velocityY = 3;
    bullet.x = Math.round(random(0,800));
    bulletsgroup.add(bullet);

  }

}