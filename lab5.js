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
  
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
  
  function leftthrice(k) {
    k.turnLeft();
    k.turnLeft();
    k.turnLeft();
  }
  function forward(k) {
    k.move();
    k.move();
  }
  
  function rightwall(k){
  k.turnLeft();
  forward(k);
  k.turnLeft();
  }
  
  function leftwall(k) {
    leftthrice(k);
    forward(k);
    leftthrice(k);
  }
  
  k.turnLeft();
  
  while (k.frontIsClear()) {
    k.move();
  }
  while (k.frontIsBlocked()) {
  leftthrice(k);
}
  k.move();
  
  while (k.beepersPresent()) {
    k.pickBeeper();
    k.move();
  }
  
  rightwall(k);
  k.move();
  k.move();

  while (k.beepersPresent()) {
    k.pickBeeper();
    k.move();
  }
  
  k.move();
  leftwall(k);
  forward(k);
  k.move();
  
  while (k.beepersPresent()) {
    k.pickBeeper();
    k.move();
  }
  
  forward(k);
  rightwall(k);
  forward(k);
  forward(k);
  
  while (k.beepersPresent()) {
    k.pickBeeper();
    k.move();
  }
  
  forward(k);
  k.move();
  leftwall(k);
  forward(k);
  k.move();
  
  while (k.beepersPresent()) {
    k.pickBeeper();
    k.move();
  }
  
  forward(k);
  rightwall(k);
  forward(k)
  
  while (k.beepersPresent()) {
    k.pickBeeper();
    k.move();
  }
  
  k.move();
  leftwall(k);
  k.move();
  
  while (k.beepersPresent()) {
    k.pickBeeper();
    k.move();
  }
  
  k.turnLeft();
  k.move();
  k.turnLeft();
  
  while (k.frontIsClear()) {
    k.move();
  }
}
  return main;
}
