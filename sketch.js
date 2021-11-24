var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var balloon;
var balloonImage1;
var balloonImage2;
var balloonposition= "database".ref('balloon/height');
balloonposition.on("value",readPosition,showError);
function draw() {
  background("bg");

  if(keyDown(LEFT_ARROW)){''
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale -0.01;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
''
function updateHeight(x,y){
  datebase.ref('balloon/height').set({
    'x': height.x + x ,
    'y': height.y + y
  })   
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}   
function showError(){
  console.log("Error in writing to the database");
} 
