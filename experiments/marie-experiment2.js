const size = 400;
const amount = 100;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function drawElement(counter) {
  push();
  const fields = 8;
  const s = size / fields;
  for (let x = 0; x < fields; x++) {
    for (let y = 0; y < fields; y++) {
      push();
      noStroke();
      if (Math.random() < 0.8) {
        fill(0, 0, 0, 30);
      } else if (Math.random() > 0.95) {
        push();
        fill(116, 15, 153, 95);
        scale(0.6);
        rotate(6.3);
        square(x * s, y * s, s);
        pop();
      }
      circle(x * s, y * s, s);
      pop();
    }
  }
  pop();
}

function drawSecondElement(counter) {
  push();
  const fields = 7;
  const s = size / fields;
  for (let x = 0; x < fields; x++) {
    for (let y = 0.7; y < fields; y++) {
      push();
      noStroke();
      if (Math.random() < 0.9) {
        fill(173, 125, 152, 50);
      } else if (Math.random() < 0.5) {
        fill(72, 218, 247, 80);
        scale(0.5);
      }
      circle(x * s + 10, y * s - 5, s);
      pop();
    }
  }
  pop();
}

function draw() {
  background(255, 255, 255);

  const centerX = (width - size) / 2;
  const centerY = (height - size) / 2;
  for (let i = 0; i < amount; i++) {
    push();
    translate(centerX, centerY);
    drawElement(i);
    drawSecondElement(i + 0.5);
    pop();
  }

  noLoop();
}
