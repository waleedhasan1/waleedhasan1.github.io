function setup() {
  createCanvas(windowWidth, windowWidth);
  noFill();
  noLoop();
}

function draw() {
  background('#023E0C');
  stroke('white');
  for (let i = 0; i < windowWidth+400; i+= 50)
  {  
    ellipse(windowWidth/2,windowWidth/2,i,i);
  }
  for (let alex = 1500; alex >-500 ; alex -= 30)
  {
     // ellipseMode(CENTER);
       arc(windowWidth/2, alex, windowWidth,300, 0, PI);
 
     // ellipseMode(CENTER);
       arc(windowWidth/2, alex, windowWidth,300, PI, 2*PI);
      
     // arc(alex, windowWidth/2, windowWidth, windowHeight + 100, PI/2, 3*PI/2);
  
       arc(alex, windowWidth/2, windowWidth, windowHeight + 100, -PI/2, PI/2);
  }
}