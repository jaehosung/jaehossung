let c
let i = 1;
let testcase = 10;
let start = false;
let time;
let prevmillis;

let rcolor = [[148, 0, 211],[75, 0, 130],[0, 0, 255	],[0, 255, 0]	,[255, 255, 0	],[255, 127, 0	],[255, 0 , 0]]

function preload() {
  p_1 = loadImage('assets/0.png');
  p_2 = loadImage('assets/10.png');
  p_3 = loadImage('assets/20.png');
  p_4 = loadImage('assets/40.png');
  p_5 = loadImage('assets/80.png');
  p_6 = loadImage('assets/0.png');
  p_7 = loadImage('assets/G_10.png');
  p_8 = loadImage('assets/G_20.png');
  p_9 = loadImage('assets/G_40.png');
  p_0 = loadImage('assets/G_80.png');
  p_99 = loadImage('assets/DONE.png');
}

function setup() {
  c = createCanvas(800, 554);
  prevmillis = millis();
}
function draw(){
 
  time = millis();

  if(start == false && time-prevmillis > 2000){
    photoUpdate(testcase)
    start = true;
  }
}

function mousePressed() {
  strokeWeight(0);
  fill(color(rcolor[7-i][0],rcolor[7-i][1],rcolor[7-i][2]))
  ellipse(mouseX, mouseY, 20, 20);
  fill(0)
  textSize(16);
  text(i, mouseX-5, mouseY+5);
  i = i+1;
  if(i === 5){
    saveCanvas(c, 'participant01_'+ testcase, 'jpg');
    i = 1;
    fill(0);
    rect(0, 0, 800, 554);
    prevmillis = millis();
    start = false;
    testcase = testcase -1;
  }
}
function photoUpdate(){
  i = 1;
  if (testcase === 0) {
    image(p_99, 0, 0);
  }
  if (testcase === 1) {
    image(p_1, 0, 0);
  }
  if (testcase === 2) {
    image(p_2, 0, 0);
  }
  if (testcase === 3) {
    image(p_3, 0, 0);
  }
  if (testcase === 4) {
    image(p_4, 0, 0);
  }
  if (testcase === 5) {
    image(p_5, 0, 0);
  }
  if (testcase === 6) {
    image(p_6, 0, 0);
  }
  if (testcase === 7) {
    image(p_7, 0, 0);
  }
  if (testcase === 8) {
    image(p_8, 0, 0);
  }
  if (testcase === 9) {
    image(p_9, 0, 0);
  }
  if (testcase === 10) {
    image(p_0, 0, 0);
  }

  if(testcase=='q'){
    rect(0, 0, 800, 554);
  }
}


function keyTyped() {
  if (key === 's') {
  }
}
function keyPressed(){
  i = 1;
  if (key === '1') {
    image(p_1, 0, 0);
  }
  if (key === '2') {
    image(p_2, 0, 0);
  }
  if (key === '3') {
    image(p_3, 0, 0);
  }
  if (key === '4') {
    image(p_4, 0, 0);
  }
  if (key === '5') {
    image(p_5, 0, 0);
  }
  if (key === '6') {
    image(p_6, 0, 0);
  }
  if (key === '7') {
    image(p_7, 0, 0);
  }
  if (key === '8') {
    image(p_8, 0, 0);
  }
  if (key === '9') {
    image(p_9, 0, 0);
  }
  if (key === '0') {
    image(p_0, 0, 0);
  }

  if(key=='q'){
    rect(0, 0, 800, 554);
  }
  console.log("test")
}
