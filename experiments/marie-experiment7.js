let system;
function setup() {
  createCanvas(innerWidth, innerHeight);
  system = new ParticleSystem();
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector();
    this.velocity = createVector();
  }
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  show() {
    stroke(0);
    fill(175);
    circle(this.position.x, this.position.y, 8);
  }
}

function draw() {
  background(255, 255, 255);
  //system.run();
}
