function setup() {
  createCanvas(540,540);
  noLoop();
}

function draw() {
  
  let border = 35;
  let n = floor(random(10,40));
  let w = (width - 2 * border) / n * 4.5/6;
  let vertexCount = 15;
  let vertexCountVar = 8;
  
  strokeWeight(w/30);
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      let xpos = border + (width-2*border)/n * (i + 0.5);
      let ypos = border + (width-2*border)/n * (j + 0.5);
      
      stroke(random(0,50));
      
      randomShape(xpos+random(-w/10,w/10),
                  ypos+random(-w/10,w/10),
                  vertexCount+random(-vertexCountVar, vertexCountVar),
                  random(w/3,w/1.7));
      
    }
  }
  
}

function randomShape(x,y,vertexCount,w){
  
  beginShape();
  
  for (let i = 0; i < vertexCount; i++) {
    randomPoint(x,y,w,w)
  }
  
  endShape(CLOSE);
}

function randomPoint(x,y,maxX, maxY){
  
  vertex(x+random(-maxX, maxX), y+random(-maxY, maxY));
  
}