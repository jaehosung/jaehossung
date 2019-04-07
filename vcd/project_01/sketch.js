function preload(){
  background_on = loadImage('assets/background_on.png'); // Load the image
  background_off = loadImage('assets/Background_off.png'); // Load the image
  lamp = loadImage('assets/Lamp.png');
  lamp_off = loadImage('assets/Lamp_off.png');
  lamp_delete = loadImage('assets/Pole_DeleteLamp.png');
  signature = loadImage('assets/signature.png')
  foreground = loadImage('assets/Foreground_Shadow2.png')
  shadow_bigman = loadImage('assets/shadow_bigman.png')
  shadow_shortman = loadImage('assets/shadow_shortman.png')
  detail_arm = loadImage('assets/Detail_between arm and body.png')
  prevtime = 0;
  interval = 5000;
  isLampOn = false;
  Y = 115
}

let timer;

function setup() {
 createCanvas(800, 638);
}

function draw() {

  if (millis()-prevtime > interval){
    prevtime = millis()
    // setup()
    console.log("done")
    shadow_bigman = loadImage('assets/shadow_bigman.png')
    shadow_shortman = loadImage('assets/shadow_shortman.png')
  }

  //Draw the background (on/off)
  if(isLampOn == true){
    image(background_on, 0, 0);
  }else{
    image(background_off,0,0);
  }
  // Delete Lamp for visualizing

  
  Y = mouseY-60
  if(Y > 328)
    Y = 328
  if(Y < 115 )
    Y = 115
  
  lamp_posX = 397+0.02873563218*(Y-174)
  lamp_posY = Y

  if(isLampOn == true){
    noStroke()
    let c = color(255, 255, 255, 70);
    fill(c)
    test = (Y-328)*0.6;
    quad(0, Y-328, 250+test, 0, lamp_posX+5, Y+53, 0, 800);
    quad(width, Y-328, 580-test, 0, lamp_posX+25, Y+53, width, height);
    // quad(0, Y-328, 245+(Y-328), Y-328, lamp_posX+5, Y+53, 0, 800);
    // quad(width, Y-328, 580-(Y-328), Y-328, lamp_posX+25, Y+53, width, height);
    image(lamp_delete, 319,90)
    console.log(shadow_bigman.height + "   " + shadow_bigman.width)
    shadow_bigman.resize(165,0.8732394366*Y+110.5774648)
    image(shadow_bigman,178,-0.8732394366*Y + 300.4225352)


    shadow_shortman.resize(115,1.863849765*Y+-33.342723)
    image(shadow_shortman,61,-1.863849765*Y+473.34272)

    image(detail_arm,299,278)
    image(foreground, 0,163)
    image(lamp, lamp_posX ,lamp_posY)
  }else{
    image(lamp_delete, 319,90) 
    image(lamp_off, lamp_posX ,lamp_posY)
  }



  image(signature,639,601)
  
  // console.log(mouseX,mouseY)
}

function mousePressed() {
	startY = mouseY;
  isLampOn = !isLampOn
  setup()
}
