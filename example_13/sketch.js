// Randomly choose a hue for background
// Then choose two colours for shapes that are + 180 from background
// Randomly choose how far apart the two shape colours are
// Add some individual variation
// learning11 - add randomness to size of shapes
// learning12 - add inversion of saturation for background/shape colour
// learning13 - add random option for white or transparent fill

function setup() {
  
  createCanvas(540,540);
  noLoop();
  colorMode(HSB,360,100,100);
  
}

function draw() {
  
  let border = 35;
  let n = floor(random(10,40));
  let w = (width - 2 * border) / n * 4.5/6;
  strokeWeight(min(w/20, 2));
  
  let randomHue = random(360);
  let randomHueSep = random(120);
  
  let randomBgSat = 0;
  let randomShapeSat = 0;
  let randomShapeBright = 0;
  let randomStrokeBright = 0;
  let randomStrokeSat = 0;

  let randomSatBrightOption = floor(random(20));
  
  if ([0,1,2,3,4,5,6,7,8,9].includes(randomSatBrightOption)) {
    randomBgSat = 3;
    randomShapeSat = 5;
    randomShapeBright = 90;
    randomStrokeSat = 50;
    randomStrokeBright = 60;
  } else if ([10,11,12,13,14,15,16,17,18,19].includes(randomSatBrightOption)) {
    randomBgSat = 15;
    randomShapeSat = 5;
    randomShapeBright = 90;
    randomStrokeSat = 50;
    randomStrokeBright = 40;
  }
  
  let randomFillWhite = floor(random(6));
  
  print(randomBgSat, randomShapeSat, randomShapeBright, randomStrokeSat, randomStrokeBright, randomSatBrightOption);
  
  let randomRotate = 0;
  let randomShape = 0;

  background(randomHue, randomBgSat, 100);
  
  strokeJoin(ROUND);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      randomRotate = floor(random(8));
      randomShape = floor(random(6));
      randomShapeColour(randomHue, randomHueSep, randomShapeSat, randomShapeBright, randomStrokeSat, randomStrokeBright);
      
      if([10].includes(randomSatBrightOption)) {
        fill(100);
        stroke(30);
        strokeWeight(min(w/20, 1));
      } else if ([0].includes(randomSatBrightOption)) {
        fill(100);
        strokeWeight(min(w/20, 1));
      } else if ([11].includes(randomSatBrightOption)) {
        fill(randomHue, randomBgSat, 100);
        strokeWeight(min(w/20, 1));
      }
      
      resetMatrix();
      translate(xpos,ypos);
      
      if (randomShape == 0) {
        rotate(randomRotate*PI/2);
        drawTriangle(w);
      } else if (randomShape == 1) {
        drawArc(w);
      } else {
        drawSquare(w);
      }
      
    }
  }
  saveCanvas();
}

function randomShapeColour(randomHue, randomHueSep, randomShapeSat, randomShapeBright, randomStrokeSat, randomStrokeBright) {
  
  let wH = 25;
  let wS = 25;
  let wB = 15;
  
  let randomHueVariation = random([(randomHue + 180 + random(-wH,wH)) % 360,
                                    (randomHue + 180 + randomHueSep + random(-wH,wH)) % 360]);

  stroke(randomHueVariation,
         randomStrokeSat + random(-wS,wS),
         randomStrokeBright + random(-wB,wB));
  
  fill(randomHueVariation,
       randomShapeSat + random(-wS,wS),
       randomShapeBright + random(-wB,wB));
  
}

function drawSquare(w) {

  rectMode(CENTER);
  
  let randomCorner1 = random(10);
  let randomCorner2 = random(10);
  let randomCorner3 = random(10);
  let randomCorner4 = random(10);
  
  square(0,0,w,randomCorner1,randomCorner2,
    randomCorner3,randomCorner4);

}

function drawTriangle(w) {
  
  triangle(-w/2,w/2,0,-w/2,w/2,w/2);

}

function drawArc(w) {
  
  let startRadian = 0;
  let gapRadian = 0;
  
  startRadian = random(0,2*PI);
  gapRadian = random(0.05,0.55);
  
  arc(0,0,w,w,startRadian,startRadian+(2-gapRadian)*PI, PIE);
  
}

