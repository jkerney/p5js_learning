function setup() {
  createCanvas(540,540);
  background(245);
  noLoop();
  //noStroke();
}

function draw() {

  rectMode(CENTER);
  
  let border = 35;
  let n = 20;
  let w = 36;
  let count = 0;
  let randomR = 0;
  let randomG = 0;
  let randomB = 0;
  let randomAlpha = 0;
  let randomRotate = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      randomR = random(255);
      randomG = random(255);      
      randomB = random(255);
      randomAlpha = random(150);
      randomRotate = random(-1,1);
      
      stroke(randomR, randomG, randomB, 255);
      strokeWeight(1);

      fill(randomR, randomG, randomB, randomAlpha);
      
      resetMatrix();
      translate(xpos,ypos);
      square(0,0,w);

    }
  }
  //saveCanvas();
}
