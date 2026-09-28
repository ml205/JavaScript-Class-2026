// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-08
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Easy)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
   let steps = 0; 
  k.putBeeper();               
  while (k.frontIsClear()) {
    k.move();
    k.putBeeper();
    steps = steps + 1;          
  }
  k.turnLeft();
  for (let i = 0; i < 4; i++) {
    k.move();
    k.putBeeper();
    steps = steps + 1;         
  }
  for (let i = 0; i < steps; i++) {
}
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Medium)
// ──────────────────────────────────────────────────────────
function problem_2() {
function right(k) {
    k.turnLeft();
    k.turnLeft();
    k.turnLeft();
}

function turn(k) {
    k.turnLeft();
    k.turnLeft();
}

function main(k) {

let done = false;

while (!done) {
let count = 0;

while (k.frontIsClear()) {

 while (k.beepersPresent()) {
  k.pickBeeper();
  count++;
    }
k.move();
    }

  while (k.beepersPresent()) {
  k.pickBeeper();
  count++;
  }

  turn(k);

  while (k.frontIsClear()) {
   k.move();
  }

for (let i = 0; i < count; i++) {
  k.putBeeper();
  }

 turn(k);
 k.turnLeft();

 if (k.frontIsClear()) {
  k.move();
  right(k);
  } else {
   done = true;
  }
 }
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
// Problem 4: hard (Hard)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
  
}
  return main;
}
