function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  noLoop();
  myTurtle = new Turtle();
}

function draw() {
  background(200, 40, 73);
  myTurtle.penUp();
  myTurtle.moveTo(0, 20);
  myTurtle.penDown();
  sun(72, 100, 175);
  myTurtle.penUp();
  myTurtle.moveTo(1, 500);
  myTurtle.turnLeft(90);
  grass(0, 20);
  soil(0, 5);
}

function sun(section, steps, angle) {
  stroke(50, 100, 300);
  for (let i = 0; i < section; i++) {
    myTurtle.moveForward(steps);
    myTurtle.turnRight(angle);
  }
}

function soil(begin, length) {
  for (let i = 0; i < 500; i += 1) {
    myTurtle.moveTo(begin + i, 500);
    myTurtle.penDown();
    strokeWeight(1);
    stroke(29, 75, 60);
    myTurtle.moveForward(length);
    myTurtle.penUp();
  }
}

function grass(begin, length) {
  for (let i = 0; i < 500; i += 3) {
    myTurtle.moveTo(begin + i, 500);
    myTurtle.penDown();
    strokeWeight(1);
    stroke(170, 40, 80);
    myTurtle.moveForward(length * 0.5);
    bend(20);
    myTurtle.penUp();
  }
}

function bend(length) {
  const turn = random();
  myTurtle.pushState();
  if (turn < 0.5) {
    console.log('left');
    myTurtle.turnLeft(5);
    myTurtle.moveForward(length * 0.5);
  } else {
    console.log('right');
    myTurtle.turnRight(5);
    myTurtle.moveForward(length * 0.5);
  }
  myTurtle.popState();
}
