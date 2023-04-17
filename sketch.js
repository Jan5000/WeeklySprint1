let s = 0;
let c;
let newCircle;
let tapped = false;
let song;
let arrayXY = [];
let stepSize;
var secondCounter = 0;
let mFont;

function preload() {
  song = loadSound('assets/geir-jenssen-cho-oyu.mp3');
  mFont = loadFont('assets/AcidGrotesk-Bold.otf');
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  strokeWeight(3);
  textAlign(CENTER);
  textSize(30);
  textFont(mFont);
  setInterval(timeIt, 1000);
}

function draw() {
  

  if (mouseIsPressed === true) {
    noFill();
    tapped = true;
    s++;
    background(0,0,0,25);
    //c = color();
    stroke(255);
    //stroke(map(mouseX, 0, width, 200, 255),map(mouseX, 0, width, 255, 200),map(mouseY, 0, height, 255, 200));
    ellipse(mouseX, mouseY, 100+abs(sin(s/50)*25), 100+abs(sin(s/50)*25));
    //text(secondCounter, mouseX, mouseY-100);
    arrayXY[s] = [round(mouseX), round(mouseY)];
    //console.log(arrayXY[s]);
    //console.log(arrayXY.length);
    s++;
  }
  else {
    if(tapped) {
      tapped = false;
      //console.log(arrayXY);
      background(0);
      stroke(255,255,255);
      beginShape();
      stepSize = width/arrayXY.length;
      for(let i = 1; i < arrayXY.length; i = i+2) {
        fill(255);
        noStroke();
        //fill(map(arrayXY[i][0], 0, width, 100, 255),map(arrayXY[i][0], 0, width, 255, 100),map(arrayXY[i][1], 0, height, 255, 100));
        //ellipse(stepSize*i,arrayXY[i][0],10,10);
        //ellipse(stepSize*i,arrayXY[i][1],10,10);
        vertex(stepSize*i,arrayXY[i][0]);
        vertex(stepSize*i,arrayXY[i][1]);
      }
      
      
      noFill();
      stroke(255);
      strokeWeight(1);
      endShape();

      fill(255);
      stroke(0);
      text(secondCounter, width/2, height/2);

      arrayXY = [];

      saveCanvas(c, 'UserData_Song:geir-jenssen-cho-oyu.mp3_'+secondCounter+'s', 'jpg');
      resetCounterNow();
    }
    s = 0;

    //background(0,0,0,15);
    //ellipse(mouseX, mouseY, 75, 75);
  }



}

function touchEnded() {
  song.stop();
  //console.log("ww");
}
function touchStarted() {
  song.play();
  //setInterval(timeIt, 1000);
  resetCounterNow()
  //console.log("111");
}

function timeIt() {
  if (tapped) {
    secondCounter++;
  }
}

function resetCounterNow() {
  secondCounter = 0;
}