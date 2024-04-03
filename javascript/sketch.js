let bgcolor;
let fonts = [];
let gradientColors = []; 
let currentColorIndex = 0;
let currentFontIndex = 0;
let scrollCounter = 0;
let rotationAngle = 0;
let scrollUpCounter = 0;
let scrollDownCounter = 0;

let scrollBarHeight;
let scrollBarWidth = 20;
let scrollBarPosition = 0;

let scrollingStarted = false;

function preload() {
    fonts.push (loadFont('assets/tbf.otf'));
    fonts.push (loadFont('assets/Imbue.ttf'));
    fonts.push (loadFont('assets/RobotoMedium.ttf'));
    fonts.push (loadFont('assets/RubikScribble.ttf'));
    fonts.push (loadFont('assets/Drunk.otf'));
    fonts.push (loadFont('assets/Lostar.ttf'));
    fonts.push (loadFont('assets/Muthiara.otf'));
    fonts.push (loadFont('assets/Starborn.otf'));
    fonts.push (loadFont('assets/Winter Memories.otf'));
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bgcolor = color(255);
    textSize(60);

    gradientColors.push(color(200, 140, 244));
    gradientColors.push(color(97, 218, 255));
    gradientColors.push(color(115, 190, 255));
    gradientColors.push(color(115, 255, 194));
    gradientColors.push(color(204, 255, 115));
    gradientColors.push(color(248, 255, 115));
    gradientColors.push(color(255, 185, 115));
    gradientColors.push(color(255, 115, 115));

    scrollBarHeight = windowHeight;
}

function mouseWheel(event) {

                        // for every 10 scrolls, it changes background colour and typeface
                        /*scrollCounter++;

                        if (scrollCounter % 5 === 0){
                            // changes based on scroll direction
                            currentFontIndex = (currentFontIndex + 1) % fonts.length;
                            currentColorIndex = (currentColorIndex + 1) % gradientColors.length;
                            rotationAngle += event.delta * 0.01;
                        }*/
                        
                        //for every 1 scroll it changes background colour and typeface
                        /* 
                        if (event.delta > 0) {
                            currentColorIndex = (currentColorIndex + 1) % gradientColors.length;
                        } else {
                            currentColorIndex = (currentColorIndex - 1 + gradientColors.length) % gradientColors.length;
                        }

                        if (event.delta > 0) {
                            currentFontIndex = (currentFontIndex + 1) % fonts.length;
                        } else {
                            currentFontIndex = (currentFontIndex - 1 + fonts.length) % fonts.length;
                        } */
                        // Detect scroll direction
    
    if(!scrollingStarted){
        scrollingStarted=true;
    }

    if (event.delta > 0) {
        scrollUpCounter++;
        scrollDownCounter = 0;
    } else {
        scrollDownCounter++;
        scrollUpCounter = 0;
    }

    // Change font every 5 scrolls up
    if (scrollUpCounter >=5) {
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
        scrollUpCounter = 0;
    }

    // Change background color every 5 scrolls down
    if (scrollDownCounter >=5) {
        currentColorIndex = (currentColorIndex + 1) % gradientColors.length;
        scrollDownCounter = 0;
    }

    rotationAngle += event.delta * 0.01;
    return false;
}

function draw() {
    // Calculating the next colour index
    let nextColorIndex = (currentColorIndex + 1) % gradientColors.length;
    // getting the current and next colours
    let currentColor = gradientColors[currentColorIndex];
    let nextColor = gradientColors[nextColorIndex];

    setGradient(0, 0, windowWidth, windowHeight, currentColor, nextColor);

    if (scrollingStarted) {
        translate(50, height - 50);
        rotate(rotationAngle);
        rectMode(CENTER);
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(50, 50, 800, 800);

        translate(100, height - 100);
        rotate(rotationAngle);
        rectMode(CENTER);
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(50, 50, 800, 800);

        translate(500, height - 100);
        rotate(rotationAngle);
        rectMode(CENTER);
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(50, 50, 800, 800);

        translate(70, height - 5);
        rotate(rotationAngle);
        rectMode(CENTER);
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(50, 50, 800, 800);

        translate(5, height - 10);
        rotate(rotationAngle);
        rectMode(CENTER);
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(50, 50, 800, 800);

        translate(width - 50, height - 10);
        rotate(rotationAngle);
        rectMode(CENTER);
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(50, 50, 800, 800);

        translate(width - 100, height - 105);
        rotate(rotationAngle);
        rectMode(CENTER);
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(50, 50, 800, 800);
    }

    resetMatrix();

    noStroke();
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

// drawing the gradient background
// draws a gradient between the current and next colours using linear interpolation
// linear interpolation - calculates the value between 2 values 
function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
} 