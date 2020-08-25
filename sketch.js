//Global Variables
var bg , bgImage;

var monkey , monkeyImg;

var foodGroup , bananaImg;

var obstacleGroup , obstacleImg;

var score ;



function preload(){
    bgImage = loadImage("jungle2.jpg");
  bananaImg = loadImage("Banana.png");
    obstacleImg = loadImage("stone.png");
  monkeyImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}

function setup() {
  createCanvas(600,300);
  
  bg = createSprite(200,200,600,400);
  bg.addImage(bgImage);
  bg.x = bg.width/2;
  bg.velocityX = -(6+3*score/100 );
  bg.visible = false;
  
 
  monkey = createSprite(40,200,20,50);
  monkey.addAnimation("Monkey",monkeyImg);
monkey.scale = 0.1;
  
  score = 0;
  
  fruitsGroup =new Group();
  obstacleGroup = new Group();
  
}

function draw(){
 background(255); 
 
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 300,300);

 if(bg.x>bg.x/2){ 
  bg.width = bg.width/2;
 }
  
  if(fruitsGroup.isTouching(monkey)){
   fruitsGroup.destroyEach();
    score = score+2;
    monkey.scale = monkey.scale+0.0001 ;
  }
  
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale = 0.1;
  }
  
  obstacle();
  fruits();
    
  drawSprites();
     
    
}

function fruits() {
  if(frameCount % 100 === 0){  
   var banana = createSprite(400,150,10,40);
  
  banana.addImage(bananaImg);
  banana.scale = 0.10;
  banana.velocityX = -3;
    
  fruitsGroup.add(banana);
  
  }
}

function obstacle(){
  
  if(frameCount % 150 ===0){
    var obstacle = createSprite(600,150,10,40);
  
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.3;
  obstacle.velocityX = -(4 + 3*score / 100);

  obstacleGroup.add(obstacle);
  }
}
