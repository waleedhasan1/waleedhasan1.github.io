//I stole this function from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-43.php#:~:text=JavaScript%20Code%3A,(primeFactorsTo(5))%3B%20console.

function setup() {
  createCanvas(windowWidth + 1000, windowHeight + 1000);
}

function mousePressed(event) {
  /*
  document.body.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY;  */
    drawGreenSpiral();
}

function drawBlackSpiral()
{
    fill('black');
    let x = mouseX; let y = mouseY;
    angle = 0;
    r = 0;
    radian = 57.2958
    for (let i = 0; i < 1000; i++){
      var dx = r * cos(angle);
      var dy = r * sin(angle);
    
      ellipse(x+dx,y+dy,10,10);
      angle = angle + radian;
      r += 1;
    }
  
}

function drawGreenSpiral()
{
    const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
    var arr = [2];  //trying to get array of prime numbers;
    for ( var i = 3; i < 10000; i+=2) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    let x = mouseX; let y = mouseY;
    fill('green');
    angle = 0;
    r = 0;
    radian = 57.2958
    for (let i = 0; i < arr.length; i++){
      let rand = int(random(0, letters.length-1));
      r = arr[i];
      angle = r * radian;
      var dx = r * cos(angle);
      var dy = r * sin(angle);
      text(letters[rand],x+dx,y+dy);
      //ellipse(x+dx,y+dy,10,10);
      //angle = angle + radian;
     // r += 1;
    }
  
  
}

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

function draw() {
  background('black');
  //var x = mouseX;
  //var y = mouseY;
  //let x = windowWidth/2;
 // let y = windowHeight/2;
  //var angle = 0;
 // let radian = 57.2958
 // var r = 0;
  fill('red');
  //ellipse(x,y,10,10);
  mousePressed();
  
  //document.addEventListener("click", printMousePos);

  
}
