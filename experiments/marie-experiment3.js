// Testing out examples from book Generative Art //
let positionX = innerWidth / 2;
let positionY = innerHeight / 2;
let speed = 0.1;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(230, 230, 230);
  frameRate(60);
}

function crossHair(positionX, positionY, rotation, speed) {
  push();
  stroke(130, 0, 0);
  strokeWeight(4);
  smooth();
  rotate(rotation);
  line(
    positionX - innerWidth / 2 - 70,
    positionY - innerHeight / 2 - 70,
    positionX - innerWidth / 2 + 70,
    positionY - innerHeight / 2 + 70
  );
  line(
    positionX - innerWidth / 2 + 70,
    positionY - innerHeight / 2 - 70,
    positionX - innerWidth / 2 - 70,
    positionY - innerHeight / 2 + 70
  );
  fill(255, 255, 255, 150);
  ellipse(positionX - innerWidth / 2, positionY - innerHeight / 2, 50, 50);
  pop();
}

var rotation = 0;

function draw() {
  push();
  let distanceX = mouseX - positionX;
  let distanceY = mouseY - positionY;
  translate(positionX, positionY);
  crossHair(positionX, positionY, rotation, speed);

  //rotation += 0.1;
  //if (rotation > 1) {
  // rotation = 0;
  //}

  positionX += distanceX * speed;
  positionY += distanceY * speed;
  if (positionX && positionY > innerWidth && innerHeight) {
    speed = 0;
  }

  pop();
}
