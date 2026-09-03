// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-03
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
    if (k.beepersPresent()) {
    k.pickBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
   if (k.beepersPresent()) {
    k.pickBeeper();
  }
  k.move();
  k.move();
  if (k.beepersPresent()) {
    k.pickBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
    k.move();
  if(k.beepersPresent()){
    k.paintCorner("Red");
  }
  k.move();
  k.move();
  if(k.beepersPresent()){
    k.paintCorner("Red");
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
 function red(k){
 if (k.cornerColorIs("Red")) {
    k.putBeeper();
  }
}

  function orange(k){
  if (k.cornerColorIs("Orange")) {
    k.putBeeper();
    k.putBeeper();
  }
 } 
 
  function blue(k){ 
   if (k.cornerColorIs("Blue")) {
    k.putBeeper();
    k.putBeeper();
    k.putBeeper();
  }
}
function color(k) {
  blue(k);
  orange(k);
  red(k);
}

function steps(k){
  color(k);
  k.move();
}

function east(k){
  color(k);
  k.turnLeft();
  k.move();
  k.turnLeft();
}

function west(k){
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  k.move();
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function row(k){
  steps(k);
  steps(k);
  steps(k);
  steps(k);
  steps(k);
  steps(k);
  steps(k);
}

function work(k){
  row(k);
  east(k);
  row(k);  
  west(k);
}

function work1(k){
  row(k);
  east(k);
  row(k); 
}

function main(k) {
  work(k);  
  work(k); 
  work(k); 
  work1(k); 
}
  return main;
}
