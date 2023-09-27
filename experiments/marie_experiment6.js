function setup() {
  createCanvas(innerWidth, innerHeight);
}

const osc = new Tone.Oscillator(440, "sine").toDestination().start();

function draw() {}
