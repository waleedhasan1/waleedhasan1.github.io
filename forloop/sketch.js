function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20,140,56);
  //for loop pyramid
  fill(200,20,100)

  let adj = 0;
  for (var x = windowWidth; x > 0; x -= 50){
    rect(0+adj,350-adj,400-adj*2,50)
    adj = adj + 50
  }
}