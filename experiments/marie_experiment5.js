let t = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  noStroke();
  for (i = 0; i < height; i += 3) {
    for (j = 0; j < width; j += 3) {
      var n = noise(i * 0.005 + t, j * 0.005 + t);

      fill(n * 255);
      rect(i, j, 3);
    }
  }
  t += 0.05;
}
