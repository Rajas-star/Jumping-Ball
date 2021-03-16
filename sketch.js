
  var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
 
  movingRect = createSprite(800,400,30,30);
  movingRect.shapeColor = "pink";
 // movingRect.debug = true;
  movingRect.velocityX = 4;
  movingRect.velocityY = 9;



gameObject1 = createSprite(100,700,50,50);
gameObject1.shapeColor = "green";
//gameObject1.debug = true;


gameObject2 = createSprite(300,700,50,50);
gameObject2.shapeColor = "red";

gameObject3 = createSprite(500,700,50,50);
gameObject3.shapeColor = "yellow";

gameObject4 = createSprite(700,700,50,50);
gameObject4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
 
  
 


  

  

    if(isTouching(movingRect,gameObject1)){
      movingRect.shapeColor = "green";
     movingRect.bounceOff(gameObject1);
      }
     
      
      if(isTouching(movingRect,gameObject2)){
        movingRect.shapeColor = "red";
        movingRect.bounceOff(gameObject2);
        }
           

        if(isTouching(movingRect,gameObject3)){
          movingRect.shapeColor = "yellow";
          movingRect.bounceOff(gameObject3);
          }
         
          if(isTouching(movingRect,gameObject4)){
            movingRect.shapeColor = "blue";
            movingRect.bounceOff(gameObject4);
            }
           

    
            edges=createEdgeSprites();
            movingRect.bounceOff(edges);







  drawSprites();
    }


function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    &&  object2.x - object1.x < object2.width/2 +object1.width/2
    && object1.y - object2.y < object2.height/2 +object1.height/2
      &&  object2.y - object1.y < object2.height/2 +object1.height/2) {

   return true;
  }
  else {
   return false;
  } 






}







