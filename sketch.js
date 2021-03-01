//Create variables here
var dog
var database,foodS


function preload()
{

  sadDog = loadImage("images/dogImg.png")
  happy = loadImage("images/dogImg1.png")
  milk = loadImage("milk1.png")
  dead = loadImage("d1.png")
	//load images here
}

function setup() {
	createCanvas(800, 700);

  dog = createSprite(400,350,50,50);
  dog.addImage(sadDog)
  dog.scale=0.25
  dog.setCollider("rectangle",0,0,dog.width,dog.height);
  dog.debug = true

   
  foodGroup = createGroup();


  database=firebase.database()
  
  
  foodstock = database.ref("Food")
  foodstock.on("value",readStock)

  
  
}


function draw() { 
  background(46, 139, 87) 
  

  /*fo()
  h1()
  h2()
  if(keyWentDown(LEFT_ARROW)){
    dog.velocityX=-2
    
  }
  if(keyWentDown(RIGHT_ARROW)){
    dog.velocityX=2
   
  }
  */
 if(foodS!=undefined){

 
  if(keyDown(LEFT_ARROW)){
    writeStock()
    dog.addImage(happy)
  }

  fill("red")
  text("food : "+ foodS, 600,100)
  fill("red")
  text("The hunger level should not go above 12 or else the dog will die",450,130)
 }

  drawSprites();


  
}

function readStock(data){
  foodS=data.val();

}

function writeStock(){
  
  if(foodS<=0){
    database.ref('/').update({
      Food:0
    })
    
  }
  else{database.ref('/').update({
    Food:foodS-1
  })}
  
}

/*function fo(){
if (keyWentDown(32)){
  food = createSprite(400,0,1,1);
    food.addImage(milk)
    food.scale=0.1
    food.velocityY=2
    foodGroup.add(food)
    food.x=Math.round(random(0,600))
  }}
function h1(){
  if(dog.isTouching(foodGroup)){
    hunger=hunger-5
    foodGroup.destroyEach()
  }

}
function h2(){
  if (frameCount % 200 === 0){
    hunger=hunger+1
  } 
  if(hunger>12){
    dog.addImage(dead)
    dog.velocityX=0
    if(hunger>=14){
      fill("red")
      textSize(50)
      text("Dog Died",400,500)
      
    }
  }
}

*/