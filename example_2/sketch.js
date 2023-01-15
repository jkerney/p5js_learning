function setup() {
  createCanvas(540,540);
  background(255);
  noLoop();
  noStroke();
}

function draw() {

  rectMode(CENTER);
  fill(155);
  
  let border = 35;
  let n = 7;
  let w = 15;
  let count = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      count += 1;
      
      resetMatrix();
      translate(xpos,ypos);
      rotate(PI/6 * count);
      fill(155);
      rect(0,0,w,w,1);

    }
  }
  //saveCanvas();
}
