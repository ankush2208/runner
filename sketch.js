var runner , path , pathimg , invisibleline , invisibleline2 , score;
var bomb ,  coin ,coke, cokei, coini , bombi ,runneri ,coinG , cokeG , bombG ;

function preload(){
  //to load all image and animatio
 runneri = loadAnimation("Runner-1.png" , "Runner-2.png") ;
 pathimg = loadImage("path.png")
 bombi = loadImage("bomb.png")
 coini = loadImage("coin.png")
 poweri = loadImage("power.png")
 cokei = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(500,windowHeight);
  //to create path
  path = createSprite(250,400,200,400)
  path.addImage(pathimg)
  path.velocityY = 3
  path.scale = 1.3

  //to create runner
   runner = createSprite(200,500,20,20)
   runner.addAnimation("running" , runneri)
   runner.scale = 0.09

   //to create invisible walls
   invisibleline = createSprite(70,300,10,600)
   invisibleline.visible = false ;

   invisibleline2 = createSprite(450,300,10,600)
   invisibleline2.visible = false ;
  
  coinG = createGroup();
  cokeG = createGroup();
  bombG = createGroup();

  score = 0

}

function draw() {
  background(1);

  if(keyDown(RIGHT_ARROW)){
   runner.x = runner.x+5
  }

  if(keyDown(LEFT_ARROW)){
    runner.x = runner.x-5
  }
   
   if(path.y > 500){
    path.y = 200
  }
  
  if(runner.isTouching(coinG)){
  coinG.destroyEach();
  score=score+2  
}

if(runner.isTouching(cokeG)){
  cokeG.destroyEach(); 
  score=score+5  
}

if(runner.isTouching(bombG)){
  bombG.destroyEach();
  score=score-3   
}



runner.collide(invisibleline)
runner.collide(invisibleline2)


spwan();

 drawSprites();

textSize(25);
 text("SCORE = "+score,150,50)

}

function spwan(){
if(frameCount % 600 === 0){
  coin = createSprite(Math.round(random(100,400)),100,10,10);
  coin.addImage(coini);
  coin.scale = 0.4
  coin.velocityY = 2
  coinG.add(coin)
}

if(frameCount  % 400  === 0){
  bomb = createSprite(Math.round(random(100,400)),250,20,20);
  bomb.addImage(bombi);
  bomb.scale = 0.1
  bomb.velocityY = 2
  bombG.add(bomb)
}

if(frameCount % 800 ===0 ){
  coke = createSprite(Math.round(random(100,400)),50,20,20);
  coke.addImage(cokei);
  coke.scale = 0.2
  coke.velocityY = 2
  cokeG.add(coke)
}





}