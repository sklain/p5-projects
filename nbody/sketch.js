let xsize = 800;
let ysize = 800;
let pos = [];
let vel = [];
let n = 10;
let dt = 1.0;

function setup() {
  let n = 10;
  for (let i = 0; i < n; i++) {
    pos[i] = createVector(xsize / 2 + random(-100, 100),
     ysize / 2 + random(-100, 100));
    vel[i] = p5.Vector.random2D();
  }
  createCanvas(xsize, ysize);
}

function draw() {
  background(220);
  fill(0, 0, 0);
  for (let i = 0; i < n; i++) {
    ellipse(pos[i].x, pos[i].y, 10, 10);

    // update state
    pos[i] = pos[i].add(vel[i].mult(dt));
    if (pos[i].x < 0.0 || pos[i].x > xsize) {
      vel[i].x = -1 * vel[i].x;
    }
    if (pos[i].y < 0.0 || pos[i].y > ysize) {
      vel[i].y = -1 * vel[i].y;
    }

  }
  
}
