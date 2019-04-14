function preload(){
  testImage = loadImage('assets/background.png'); // Load the image
  testImage2 = loadImage('assets/background.png'); // Load the image
}

var x, y, w, h
function setup() {
 createCanvas(851, 1005+50);
 x = 0, y=0, w=width, h=height; 
}

var zoom = 1.18;
var zmin = 0.0001;
var zmax = 100;
var sensativity = 0.01;
var zoom2 = 1/0.2345;
var isStart = false

var _scale =1;
var zoom_plus = 1;
function draw() {
    //#TODO Zoom function

    if(zoom > 9007199254740991*0.7){
      zoom  = 1
    }
    if(log(zoom) < log(3.969634551010302e-20)){

    }

    if (keyIsDown(UP_ARROW)) {
      zoom_plus = zoom_plus+0.005
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      zoom_plus = zoom_plus-0.005
    }

    zoom = zoom*zoom_plus
    console.log(zoom)
    //image(testImage2, width*(1-zoom2)*0.5/zoom2 ,height*(1-zoom2)*0.5/zoom2,w,h);
    background(0)

    push();
    scale(zoom);

    //image(testImage2, width*(1-zoom2)*0.5/zoom2 ,height*(1-zoom2)*0.5/zoom2,w,h);
    //image(testImage, width*(1-zoom*zoom2)*0.5/zoom,height*(1-zoom*zoom2)*0.5/zoom,w*zoom2,h*zoom2);
    
    calibri = log(zoom)/1.45029969109;

    // for(let i = 2; i >= 1; i--){
    //   _scale = pow(zoom2,i)
    //   image(testImage2, width*(1-zoom*_scale)*0.5/zoom,height*(1-zoom*_scale)*0.5/zoom,w*_scale,h*_scale);
    // }

    image(testImage, width*(1-zoom)*0.5/zoom ,height*(1-zoom)*0.5/zoom,w,h);

    for(let i = int(5-calibri); i >= int(-5-calibri); i--){
      _scale = pow(zoom2,i)
      image(testImage2, width*(1-zoom*_scale)*0.5/zoom,height*(1-zoom*_scale)*0.5/zoom,w*_scale,h*_scale);
    }
    pop();

    // console.log(zoom)
    if(isStart === false){
      textSize(25);
      textAlign(CENTER)
      fill(255)
      textStyle(ITALIC);
      text("Press UP ARROW or DOWN ARROW",width/2,height/2);
    }
}

// function mouseWheel(event) {
//   zoom += sensativity * event.delta;
//   zoom = constrain(zoom, zMin, zMax);
//     //uncomment to block page scrolling
//   return false;
// }

function keyPressed() {
  isStart = true;
  if (keyCode === LEFT_ARROW) {
    zoom_plus = zoom_plus -0.01
  } else if (keyCode === RIGHT_ARROW) {
    zoom_plus = zoom_plus +0.01
  }
}