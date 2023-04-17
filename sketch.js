let s = 1;
let c;
let newCircle;
let tapped = false;
let song;

function preload() {
  song = loadSound('assets/why421 - warm beer.mp3');
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  strokeWeight(3);
}

function draw() {
  

  if (mouseIsPressed === true) {
    tapped = true;
    s++;
    background(0,0,0,15);
    //c = color();
    stroke(255,255,255);
    ellipse(mouseX, mouseY, 100+abs(sin(s/50)*25), 100+abs(sin(s/50)*25));
  }
  else {
    if(tapped) {
      tapped = false;
      background(55);
    }
    s = 1;
    background(0,0,0,15);
    //ellipse(mouseX, mouseY, 75, 75);
  }
}

function touchEnded() {
  song.stop();
  console.log("ww");
}
function touchStarted() {
  song.play();
  console.log("111");
}