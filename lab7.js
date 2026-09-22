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
  
}

function main(k) {
  
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

function main(k) {
  
}
  return main;
}
