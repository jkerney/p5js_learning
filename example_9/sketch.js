function setup() {
  createCanvas(540,540);
  background(245);
  noLoop();
  //noStroke();
}

function draw() {
  
  let border = 35;
  let n = 32;
  let w = 11;
  let randomR = 0;
  let randomG = 0;
  let randomB = 0;
  let randomAlpha = 0;
  let randomRotate = 0;
  let randomShape = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      randomR = random(255);
      randomG = random(255);      
      randomB = random(255);
      randomAlpha = random(150);
      randomRotate = floor(random(8));
      randomShape = floor(random(6));
      
      stroke(randomR, randomG, randomB, 255);
      strokeWeight(1);
      strokeJoin(BEVEL);
      fill(randomR, randomG, randomB, randomAlpha);
      
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
