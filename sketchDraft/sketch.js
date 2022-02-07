
/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var x = mouseX;
  var y = mouseY;
  var angle = -45;
  var r = 100;
  fill('red');
  ellipse(x,y,10,10);
  for (let i = 0; i < 80; i++){
    var dx = r * cos(angle);
    var dy = r * sin(angle);
    ellipse(x+dx,y+dy,10,10);
    angle = angle + 5;
  }
  
}
*/

function setup() {
  createCanvas(windowWidth, windowWidth);
  noFill();
  noLoop();
}

function draw() {
  background(220);
  for (let i = 0; i < width * 0.75; i+= 4)
    {
      rectMode(CENTER);
      let offset = random(-3,3);
      rect(windowWidth/2 + offset,windowWidth/2 - offset,i,i);
    }
}