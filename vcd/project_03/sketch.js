// #TODO 시작값을 0으로 설정하기 miils

function preload() {
  both = loadImage('assets/both.png')
  photo = loadImage('assets/photo.jpg')
  painting = loadImage('assets/painting.jpg')
}

function setup() {
  createCanvas(660, 900);
}

var speed_arr = [0,0.5,1,2,4,8,16,20,24,36,40,33000,66000,132000] 


var velocity = 0;
var state = 0;
var isStart = false;
var prevmillis = 0;
var speed = 0;

function draw() {
  if(keyIsDown(LEFT_ARROW)){
    velocity = velocity -1;
  }
  if(keyIsDown(RIGHT_ARROW)){
    velocity = velocity +1;
  }

  if(state ===  speed_arr.length-1)
    direction = -1;
  else if (state === 0)
    direction = 1;
  speed = speed_arr[state%speed_arr.length]
  loc = (millis()-prevmillis)* speed;
  console.log(speed)
  
  loc = loc%1320
  if(loc<=660){
      loc = sin(loc/660*PI/2)*660;
  }else{
      loc = sin((loc-660)/660*PI/2)*660+660;
  }
  loc = loc * -1
  background(0)
  image(painting,loc,0)
  image(photo,loc+660,0)
  image(painting,loc+1320,0)
  // console.log(mouseX)

  if(isStart == false){
    textSize(25);
    textAlign(CENTER)
    fill(255)
    textStyle(ITALIC);

    text("Press spacebar to start and speed up",330,890);
  }else{
    textAlign(CENTER)
    fill(255)
    // console.log(speed)
    text(speed+"px/ms",330,890);
  }
  console.log(isStart)
}

function keyPressed() {
  if(velocity === 0){
    velocity = 1;
  }
  if (keyCode === LEFT_ARROW) {
    velocity = velocity -1;
    state--;
  } else if (keyCode === RIGHT_ARROW) {
    velocity = velocity +1;
    state++;
  }
  if (keyCode === 32)
    state = state + 1 * direction;
    isStart = true;
    prevmillis = millis()

}