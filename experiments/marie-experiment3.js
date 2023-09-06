// Testing out examples from book Generative Art //
let positionX = innerWidth / 2;
let positionY = innerHeight / 2;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(230, 230, 230);
}

function crossHair() {
  push();
  translate(positionX, positionY);
  stroke(130, 0, 0);
  strokeWeight(4);
  smooth();
  line(positionX - 70, positionY - 70, positionX + 70, positionY + 70);
  line(positionX + 70, positionY - 70, positionX - 70, positionY + 70);
  fill(255, 255, 255, 150);
  ellipse(positionX, positionY, 50, 50);
  pop();
}

function draw() {
  push();

  crossHair();
  pop();
}
