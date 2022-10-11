var backgroundImg,bg
var player,playerImg
var car1,car2,car3,car4
var car1Img,car2Img,car3Img,car4Img


function preload(){
playerImg=loadImage("assets/runningman.png")
backgroundImg=loadImage("assets/bgImg.jpg")
car1Img=loadImage("assets/car1.png")
car2Img=loadImage("assets/car2.png")
car3Img=loadImage("assets/car3.png")
car4Img=loadImage("assets/car4.png")

}

function setup(){
createCanvas(700,500)
bg=createSprite(350,100,400,600)
bg.addImage("background",backgroundImg)


player=createSprite(200,400,50,50)
player.addImage("player",playerImg)
player.scale=0.5


}


function draw() {
  background("white");
  

bg.velocityY-=1

if(bg.y<0)
{
        bg.y=bg.height/2
}



  if(keyDown("LEFT_ARROW"))
  {
        player.x-=5
  }
  if(keyDown("RIGHT_ARROW"))
  {
        player.x+=5
  }
  if(keyDown("UP_ARROW"))
  {
        player.y-=4
  }
 

  drawSprites()
  spawnObstacles()
  }

function spawnObstacles() {
        if(frameCount % 200 === 0) {
          var obstacle = createSprite(random(200,500),30,30);
        obstacle.velocityY+=1
          
        var rand = Math.round(random(1,4));
          switch(rand) {
            case 1: obstacle.addImage(car1Img);
                    break;
            case 2: obstacle.addImage(car2Img);
                    break;
            case 3: obstacle.addImage(car3Img);
                    break;
         case 4: obstacle.addImage(car4Img);
                    break;
            default: break;
          }}}
          