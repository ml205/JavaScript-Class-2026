// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-07
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Easy)
// ──────────────────────────────────────────────────────────
function problem_1() {
function moveN(k, n) {
  for (let i = 0; i < n; i++)
  k.move();
}

function main(k) {
  moveN (k, 4);
  k.turnLeft();
  moveN (k, 3);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Medium)
// ──────────────────────────────────────────────────────────
function problem_2() {
function turnRight(k) {
  for (let i = 0; i < 4; i++) {
    k.turnLeft();
  }
}

function turn(k) {
  k.turnLeft();
  k.turnLeft();
}

function moveN (k, n){
  for (let i = 0; i < n; i++){
  k.move();
}
} 

function drawBar(k, h) {
  k.turnLeft();
  for (let i = 0; i < h ; i++){
  k.putBeeper();
  if (i < h - 1) {
  k.move();
}
}
turn(k);
moveN(k, h - 1);
turnRight(k);

}

function column(k) {
  k.turnLeft();
  moveN(k,1);
  turnRight(k);
}

function main(k) {
  drawBar(k,2);
  column(k);
  drawBar(k,4);
  column(k);
  drawBar(k,3);
  column(k);
  drawBar(k,1);
  column(k);
  drawBar(k,5);
 
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Difficult)
// ──────────────────────────────────────────────────────────
function problem_3() {
function turnRight(k) {
  for (let i = 0; i < 3; i++) {
    k.turnLeft();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function paintN(k, c, n) {
  for (let i = 0; i < n; i++){
    k.paintCorner(c);
    k.move();
  }
}

function main(k) {
 paintN(k,"Red",4);
 k.turnLeft();
 paintN(k,"Blue",3);
 k.turnLeft();
 paintN(k,"Green",4);
 k.turnLeft();
 paintN(k,"Yellow",3)
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: hard (Hard)
// ──────────────────────────────────────────────────────────
function problem_4() {
function turnRight(k) {
  for (let i = 0; i < 3; i++) {
    k.turnLeft();
  }
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}
function moveN(k, n) {
  for (let i = 0; i < n; i++) {
    k.move();
  }
}

  function drawBar(k, height) {
  for (let i = 0; i < height - 1; i++) {
    k.putBeeper();
    k.move();
  }
  k.putBeeper();
  turnAround(k);
  moveN(k, height - 1);
  turnAround(k);
}

function nextColumn(k) {
  turnRight(k);
  k.move();
  k.turnLeft();
}


function main(k) {
  k.turnLeft();
  for (let i = 0; i < 4; i++) {
    drawBar(k, i + 1);
    nextColumn(k);
  }
  for (let i = 3; i >= 1; i--) {

  drawBar(k, i);

  if (i > 1) {

  nextColumn(k);
}
}
nextColumn(k);
k.turnLeft();
k.turnLeft();
turnAround(k);
k.turnLeft();
moveN(k,7);
turnAround(k);
}
  return main;
}
