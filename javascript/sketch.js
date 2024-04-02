let bgcolor;
let fonts = [];
let gradientColors = []; 
let currentColorIndex = 0;
let currentFontIndex = 0;

function preload() {
    fonts.push (loadFont('assets/tbf.otf'));
    fonts.push (loadFont('assets/Imbue.ttf'));
    fonts.push (loadFont('assets/RobotoMedium.ttf'));
    fonts.push (loadFont('assets/RubikScribble.ttf'));
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bgcolor = color(255);
    textSize(60);

    gradientColors.push(color(200, 140, 244));
    gradientColors.push(color(97, 218, 255));
    gradientColors.push(color(115, 255, 194));
    gradientColors.push(color(248, 255, 115));
    gradientColors.push(color(255, 185, 115));
    gradientColors.push(color(255, 115, 115));
}

function mouseWheel(event) {

    if (event.delta > 0) {
        currentColorIndex = (currentColorIndex + 1) % gradientColors.length;
    } else {
        currentColorIndex = (currentColorIndex - 1 + gradientColors.length) % gradientColors.length;
    }

    if (event.delta > 0) {
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
    } else {
        currentFontIndex = (currentFontIndex - 1 + fonts.length) % fonts.length;
    }

    return false;


}

function draw() {
    let nextColorIndex = (currentColorIndex + 1) % gradientColors.length;
    let currentColor = gradientColors[currentColorIndex];
    let nextColor = gradientColors[nextColorIndex];

    setGradient(0, 0, windowWidth, windowHeight, currentColor, nextColor);
    drawWords();
}

function drawWords() {
    fill(0);
    let quote = '"Your choice of typeface is as important as what you do with it" - Bonnie Siegler';
    let wrappingWidth = windowWidth / 2;
    rectMode(CENTER)
    textFont(fonts[currentFontIndex]);
    textAlign(CENTER, CENTER);
    text(quote, windowWidth / 2, windowHeight / 2, wrappingWidth);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}