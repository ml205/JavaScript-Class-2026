// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-06
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  function left(k){
    k.turnLeft();
    k.turnLeft();
    k.turnLeft();
  }
  
  k.move();
  k.move();
  
  if (k.beepersPresent()) {
    k.pickBeeper();
    left(k);
    k.move();
    k.move();
    k.putBeeper();
    
  } else {
    
    k.turnLeft();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  
  for (let i = 0; i < 13; i++) {
    if (k.frontIsClear()){
      k.move();
      k.putBeeper();
    }
    else {
      k.turnLeft();
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
 if (k.noBeepersPresent()) {    
    k.paintCorner("Red");
  }
  else {
    k.paintCorner("Blue");
  }
  k.move(); 
  
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: advanced (Advanced)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
  
}
  return main;
}

