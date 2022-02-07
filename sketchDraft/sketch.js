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