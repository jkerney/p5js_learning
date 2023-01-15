function setup() {
  createCanvas(540,540);
  background(245);
  noLoop();
  //noStroke();
}

function draw() {

  rectMode(CENTER);
  
  let border = 35;
  let n = 32;
  let w = 11;
  let count = 0;
  let randomR = 0;
  let randomG = 0;
  let randomB = 0;
  let randomAlpha = 0;
  let randomRotate = 0;
  let randomCorner1 = 0;
  let randomCorner2 = 0;
  let randomCorner3 = 0;
  let randomCorner4 = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      randomR = random(255);
      randomG = random(255);      
      randomB = random(255);
      randomAlpha = random(150);
      randomRotate = random(-1,1);
      randomCorner1 = random(10);
      randomCorner2 = random(10);
      randomCorner3 = random(10);
      randomCorner4 = random(10);
      
      stroke(randomR, randomG, randomB, 255);
      strokeWeight(1);

      fill(randomR, randomG, randomB, randomAlpha);
      
      resetMatrix();
      translate(xpos,ypos);
      square(0,0,w,randomCorner1,randomCorner2,
             randomCorner3,randomCorner4);

    }
  }
  //saveCanvas();
}
