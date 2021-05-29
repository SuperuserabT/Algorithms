var fixedrect, movingrect
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 100, 50);
  fixedrect.shapeColor = "lime"
  fixedrect.debug=true
  movingrect=createSprite(100, 100, 50, 100)
  movingrect.shapeColor = "yellow"
  movingrect.debug=true
}

function draw() {
  background(0,0,0);
  movingrect.x = mouseX
  movingrect.y = mouseY 
  if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2
    && movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2
    && fixedrect.y - movingrect.y <= movingrect.height/2 + fixedrect.height/2){
      movingrect.shapeColor = "blue"
      fixedrect.shapeColor = "red"
    }
    else{
      fixedrect.shapeColor = "lime"
      movingrect.shapeColor = "yellow"
    }
  drawSprites();
}