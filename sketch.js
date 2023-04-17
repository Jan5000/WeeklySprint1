let s = 1;
let newCircle;

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(3);
  filter(GRAY);
}

function draw() {
  

  /* if(mouseIsPressed === true) {
    newCircle = new tapCircle(100, 100, 100, 100);
    newCircle.display();
  }
  else {} */

  if (mouseIsPressed === true) {
    s++;
    background(0,0,0,15);
    ellipse(mouseX, mouseY, 100, 100);
  } else {
    s = 1;
    background(0);
    //ellipse(mouseX, mouseY, 75, 75);
  }
}

class tapCircle {
  constructor(posX,posY,cwidth,cheight) {
    this.posX = posX;
    this.posY = posY;
    this.cwidth = cwidth;
    this.cheight = cheight;
  }
  //cS = 1;
  display() {
    //cS++;
    ellipse(this.posX, this.posY, this.cwidth, this.cheight);
  }
}


function mousePressed() {
  ellipse(10 , 10, 5, 5);
  // prevent default
  return false;
}