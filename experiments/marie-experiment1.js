//The following code (lines 2-72) is adapted from experiments/example.js by https://www.github.com/pixelkind //
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function draw() {
  background(252, 186, 3, 40);
  noStroke();
  fill(46, 14, 32, 70);

  push();
  translate(width / 2, height / 2);

  push();
  rotate(frameCount / 8);
  circle(25, 0, 30, 50);
  pop();

  push();
  rotate(-frameCount / 10);
  circle(50, 0, 30, 50);
  pop();

  push();
  rotate(frameCount / 9);
  circle(75, 0, 30, 50);
  pop();

  push();
  rotate(frameCount / 4);
  circle(25, 0, 30, 50);
  pop();

  push();
  rotate(-frameCount / 5);
  circle(50, 0, 30, 50);
  pop();

  push();
  rotate(frameCount / 10);
  circle(75, 0, 30, 50);
  pop();

  push();
  rotate(-frameCount / 6);
  circle(100, 0, 30, 50);
  pop();

  push();
  rotate(frameCount / 4);
  circle(35, 0, 30, 50);
  pop();

  push();
  rotate(-frameCount / 5);
  circle(45, 0, 30, 50);
  pop();

  push();
  rotate(frameCount / 7);
  circle(55, 0, 30, 50);
  pop();

  push();
  rotate(-frameCount / 8);
  circle(65, 0, 30, 50);
  pop();

  pop();
}
