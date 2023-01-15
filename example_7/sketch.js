function setup() {
  createCanvas(540,540);
  background(245);
  noLoop();
  //noStroke();
}

function draw() {

  rectMode(CENTER);
  
  let border = 35;
  let n = 7;
  let w = 35;
  let count = 0;
  let startRadian = 0;
  let gapRadian = 0;
  let fillColourIndex = 0;
  let randomR = 0;
  let randomG = 0;
  let randomB = 0;
  let randomAlpha = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      startRadian = random(0,2*PI);
      gapRadian = random(0.05,0.55);
      randomR = random(255);
      randomG = random(255);      
      randomB = random(255);
      randomAlpha = random(150);
      
      stroke(randomR, randomG, randomB, 255);
      strokeWeight(1);

      fill(randomR, randomG, randomB, randomAlpha);
      
      resetMatrix();
      translate(xpos,ypos);
      arc(0,0,w,w,startRadian,startRadian+(2-gapRadian)*PI, PIE);

    }
  }
  //saveCanvas();
}
