// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-02
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function main(k) {
  turnRight(k);
  k.move();
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function main(k) {
  k.move();
  k.move();
  turnAround(k);
  k.move();
  k.move();
  k.move();
  k.move();
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function dropAndMove(k) {
  k.putBeeper();
  k.move();
}

function main(k) {
  dropAndMove(k);
  dropAndMove(k);
  dropAndMove(k);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function floor(k){
  k.move();
  k.pickBeeper();
  k.move();
  k.move();
  k.pickBeeper();
  k.move();
  k.move();
  k.pickBeeper();
  k.move();
  k.move();
}

function floor2nd(k){
  k.move();
  k.move();
  k.pickBeeper();
  k.move();
  k.move();
  k.pickBeeper();
  k.move();
  k.move();
  k.pickBeeper();
  k.move();
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function turnAround1st(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function run(k){
  k.move();
  k.move();
  k.move();
  k.move();
  k.move();
  k.move();
  k.move();
}

function final(k) {
  k.move();
  k.pickBeeper();
  k.move();
  k.move();
  k.pickBeeper();
  k.move();
  k.move();
  k.pickBeeper();
}

function main(k) {
  k.turnLeft();
  k.move();
  k.move();
  turnAround1st(k);
  floor(k);
  k.turnLeft();
  k.move();
  k.move();
  k.turnLeft();
  floor2nd(k);
  turnAround(k);
  run(k);
  k.turnLeft();
  k.move();
  k.move();
  k.turnLeft();
  run(k);
  turnAround(k);
  final(k);
}
  return main;
}

