// Gradient Background
/*let c1,c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(255);
  c2 = color(63, 191, 191);
  
 for(let y=0; y<height; y++){
   n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
   line(0,y,width, y);
  }
}
function draw() {
  background(220);
 console.log(c2);
}*/

var bgcolor;
let font1;

function preload(){
    //font1 = loadFont('assets/Imbue.ttf');
    //font2 = loadFont('assets/RobotoMedium.ttf');
    //font3 = loadFont('assets/RubikScribble.ttf');
}

function setup () {
  createCanvas(windowWidth, windowHeight);
  bgcolor = color(255);
  //textFont(font2);
}

function mouseWheel (event) {
  bgcolor = random([color(200,140,244), color(97,218,255), color(115,255,194)]);
  //textFont = random ([])
}

function draw () {
  background(bgcolor);
  drawWords(windowWidth * 0.5);
}

function drawWords(x){
    fill(0);
    text ('"Your choice of typeface is as important as what you do with it" - Bonnie Siegler', (windowWidth/2), (windowHeight*0.5));
    textSize(50);
    textAlign(CENTER, CENTER);
}