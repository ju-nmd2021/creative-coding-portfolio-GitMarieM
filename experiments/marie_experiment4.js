/*let position;
let velocity;*/
let movingObject;

/*let positionX = innerWidth / 2;
let positionY = innerHeight / 2;
let positionXSpeed = 1;
let positionYSpeed = 3;*/

class MovingObject {
  constructor() {
    this.position = createVector(innerWidth / 2, innerHeight / 2);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
  }
  update() {
    this.position.add(this.velocity);
  }
  show() {
    stroke(0);
    fill(175);
    circle(this.position.x, this.position.y, 16, 16);
  }
  checkBorders() {
    if (this.position.x > innerWidth) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = innerWidth;
    }

    if (this.position.y > innerHeight) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = innerHeight;
    }
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(230, 230, 230);
  frameRate(60);
  /*position = createVector(innerWidth / 2, innerHeight / 2);
  velocity = createVector(1, 3);*/
  movingObject = new MovingObject();
}

function draw() {
  background(230, 230, 230);

  movingObject(update);
  movingObject(show);
  movingObject(checkBorders);

  /*position.add(velocity);

  if (position.x > innerWidth || position.x < 0) {
    velocity.x = velocity.x * -1;
  } else if (position.y > innerHeight || position.y < 0) {
    velocity.y = velocity.y * -1;
  }

  positionX += positionXSpeed;
  positionY += positionYSpeed;*/

  /*if (positionX > innerWidth || positionX < 0) {
    positionXSpeed = positionXSpeed * -1;
  } else if (positionY > innerHeight || positionY < 0) {
    positionYSpeed = positionYSpeed * -1;
  }

  stroke(0);
  fill(175);
  circle(position.x, position.y, 16, 16);*/
}
