function setup() {
    createCanvas(540,540);
    background(200);
    noLoop();
  }
  
  function draw() {
  
    rectMode(CENTER);
    fill(100);
    noStroke();
    
    let border = 35;
    let n = 15;
    let w = 5;
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        
        let xpos = border + (width-2*border)/n * (i + 0.5);
        let ypos = border + (width-2*border)/n * (j + 0.5);
        
        //translate(xpos,ypos);
        //rotate(PI / 3.0);
        rect(xpos,ypos,w,w,0.5);
      }
    }
    //saveCanvas();
  }
  