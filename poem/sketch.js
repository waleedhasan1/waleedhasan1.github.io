//declare variables for use throughout the program 
let source_text = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.';
let search_word = 'It was';
let replace_word= 'It was NOT';
let altered_text;
let backgroundColor;
let textColor;
function setup() {
  createCanvas(400, 400);
  //replace substitute word in string 
  altered_text = source_text.replaceAll(search_word, replace_word); 
}

function draw() {
  background(255);
  textFont ('Baskerville');
  textSize(20);
  
  if(mouseIsPressed){
    
    show_text = altered_text;
    backgroundColor = 'black'
    textColor = 'red';
  } else {
    show_text = source_text;
    backgroundColor = 'white';
    textColor = 'black'
  }
  background(backgroundColor);
  fill(textColor);
  text(show_text, 10, 10, width*0.9);
}