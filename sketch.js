var p1,end;
var game = 1;
var bg, pi, ei;

function preload(){
  bg = loadImage("space.png")
  pi = loadImage("p1.png");
  ei = loadImage("inhale.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  p1 = createSprite(400, 350, 50, 50);
  p1.addImage(pi);
  p1.scale = 0.25;

  e1 = createSprite(400, 50, 50, 50);
  e1.addImage(ei);
  e1.scale = 2;
  e1.debug = true;
  e1.setCollider("rectangle", 0, 0, 100, 50)

  e1.depth = p1.depth - 1;
}

function draw() {
  if (keyDown("space")){
    
  }else{
    background(bg);
  }
  camera.position.x = p1.x;
  camera.position.y = p1.y;
  if (game === 1){
    if(keyDown("w")){
      p1.y += -2
    }
    if(keyDown("s")){
      p1.y += 2
    }
    if(keyDown("a")){
      p1.x += -2
    }
    if(keyDown("d")){
      p1.x += 2
    }
    if(p1.isTouching(e1)){
      game = 0;
    }
  }
  if (game === 0){
    fill("white");
    textSize(20)
    text("You DID it", 400, -200);
  }
  drawSprites();
}