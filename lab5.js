// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-05
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  while (k.frontIsClear()) {
    k.pickBeeper();
    k.move();
  }
  k.pickBeeper();
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
 function problem(k) {
  while (k.beepersPresent()) {
    k.pickBeeper()
  }
  while (k.frontIsClear()) {
    k.move();
  }
  while (k.beepersInBag()){
  k.putBeeper();
}
  k.turnLeft();
  k.move();
  k.turnLeft();
 
  while (k.frontIsClear()) {
    k.move();
  }
  while (k.beepersPresent()) {
    k.pickBeeper();
  }
 k.turnLeft();
 k.turnLeft();
 
  while (k.frontIsClear()) {
    k.move();
  }
 while (k.beepersInBag()){
   k.putBeeper();
 }
 k.turnLeft();
  k.move();
  k.turnLeft();
  
 while (k.frontIsClear()) {
    k.move();
  }
}
function left(k){
  k.turnLeft();
  k.move();
  k.turnLeft();
}
function turnaround(k){
  k.turnLeft();
  k.turnLeft();
}
 problem(k);
 turnaround(k);
 problem(k);
 turnaround(k);
 problem(k);
 turnaround(k);
 
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
  
}
  return main;
}
