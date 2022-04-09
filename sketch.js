var gameState = "play"
var die; 
var bgimg;
var game , game1;
var wall1 , wall2 , wall3 , wall4;
var snake , snake2;
var food2, foodimg;
var Score = 0;
var food = [];

function preload(){
  
  bgimg = loadImage("bg of snake game.PNG");
  game1 = new Audio("Theme.mp3");
  foodimg = loadImage("food.png");
  die = new Audio("die2.ogg");
  game = new Audio("game 2.wav");




}


function setup() {  
  createCanvas(Windowwidth, Windowheight);
  
 
  //database = firebase.database();

  
  snake = createSprite(325,330,30,30);
  snake.shapeColor = "black";
 
  // Create a wall for a border for playing area
 wall1 = createSprite(42,300,5,510);
 wall2 = createSprite(560,300,5,510);
 wall3 = createSprite(300,50,510,5);
 wall4 = createSprite(302,555,510,5);
 
 // for do invisibility of wall
 wall1.visible = false;
 wall2.visible = false;
 wall3.visible = false;
 wall4.visible = false;

 foodGroup = new Group();

}

function draw() {
  background(bgimg);
  
if(gameState==="start"){
  

}

if(gameState==="play"){
  if (keyDown("UP_ARROW")) {
    snake.velocityX = 0;
    snake.velocityY = -4;
  }
  
  if (keyDown("DOWN_ARROW")) {
    snake.velocityX = 0;
    snake.velocityY = 4;
  }
  
 if (keyDown("LEFT_ARROW")) {
    snake.velocityX = -4;
    snake.velocityY = 0;
  }
   
  if (keyDown("RIGHT_ARROW")) {
    snake.velocityX = 4;
    snake.velocityY = 0;
  }

  if(keyWentDown("O")){
    game.play();
    game1.pause();
  }

  if(keyWentDown("P")){
    game1.play();
    game.pause();
  }
  if(keyWentDown("S")){
    game1.pause();
    game.pause();
  }

  spwanFood();
 
 
 if(snake.isTouching(wall1) || snake.isTouching(wall2)){
   gameState = "end";
   die.play();
   foodGroup.destroyEach();
}

if(snake.isTouching(wall3) || snake.isTouching(wall4)){
  gameState = "end"
  die.play();
  foodGroup.destroyEach();
}

 //text("Score= "+Score,450,20,50,50)
 
 
  //snake=snake+snake[i];
  if(snake.isTouching(foodGroup)){
    console.log("snake Is touching food");
    //snake.setVelocity(0,0)
   Score=Score+1;
   console.log(Score);
   //gameState = "end"
   foodGroup.destroyEach();
   for (var i = 30; i < 400; i=i+30) {
    snake2 = createSprite(snake.x,snake.y,30,30,i);
    snake2.shapeColor = "green";
    
}
}
}
 
if(gameState==="end"){
  //snake.setVelocity(0,0)
  game1.pause();
  game.pause();
  
  snake.velocityX = 0;
  snake.velocityY = 0;
  strokeWeight(4);
  textSize(34);
  fill("black");
  text("Game💔Over" , 250,300)
  
}
stroke("lavender");
textSize(35);
fill("black");
textStyle(BOLD); 
strokeWeight(4);
 text("Score - "+Score,400,40);

 //snake.display(); 
 //food.display();
 
 if(gameState==="pause"){
  game1.pause();
  game.pause();
  snake.setVelocity(0,0);
  stroke("lavender");
  textSize(35);
  fill("brown");
  textStyle(BOLD); 
  strokeWeight(4);
  text("Pause Snake Game", 50,40);
 }
if(keyWentDown("Space")){
  gameState = "pause";
}
if(keyWentDown("R")){
  
  gameState = "play";
}

 //snake2.display();
  drawSprites();
  
}
function spwanFood(){
  if(frameCount%100===0){
  food2 = createSprite(300,300)
  food2.x = Math.round(random(80, 520));
  food2.y = food2.x;
  food2.addImage("food2", foodimg);
  food2.scale = 0.009;
  food2.lifetime = 150;
  foodGroup.add(food2);
 }

}


