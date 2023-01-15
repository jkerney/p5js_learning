function setup() {
  
  createCanvas(540,540);
  noLoop();
  //noStroke();
  
}

function draw() {
  
  let border = 35;
  let n = 50;
  let w = 7;
  
  let randomR = random(256);
  let randomG = random(256);
  let randomB = random(256);
  let randomRotate = 0;
  let randomShape = 0;

  randomBackground();
  
  strokeWeight(1);
  strokeJoin(BEVEL);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      randomRotate = floor(random(8));
      randomShape = floor(random(6));
      randomShapeColour(randomR, randomG, randomB);
      
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
  //saveCanvas();
}

function randomBackground(){
  
  background(random(256),
              random(256),
              random(256),
              30);
  
}

function randomShapeColour(randomR, randomG, randomB) {
  
  let x = randomR + random(-100,100);
  let y = randomG + random(-100,100);
  let z = randomB + random(-100,100);
  
  stroke(x, y, z, 256);
  
  fill(x, y, z, random(150));
  
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
