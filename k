// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-09
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function turnleft(k) {
  k.turnLeft();
  k.move();
  k.turnLeft();
}

function turnright(k){
  turnaround(k);
  k.move();
  turnaround(k);
}

function turnaround(k) {
  k.turnLeft(k);
  k.turnLeft(k);
  k.turnLeft(k);
}

function problem(k){
  isTreasure(k);
  turnleft(k);
  isTreasure(k);
  turnright(k);
}

/*function isTreasure(k) {
  while (k.frontIsClear()) {
    k.move();
    if (k.cornerColorIs("Blue") && k.beepersPresent()) {
      k.pickBeeper();
    }
  }
}*/

function isTreasure(k) {
  while (k.cornerColorIs("Blue") && k.beepersPresent()) {
    k.pickBeeper();
    if (k.facingEast()) {
      k.move();
    }
      else(turnleft(k))
    
  }
}

function main(k) {
  problem(k);
  problem(k);
  problem(k);
  isTreasure(k);
  /*turnleft(k);*/
  isTreasure(k);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function countGreen(k) {
  let count = 0;
  
  return count;
}

function main(k) {
  
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function beepersInLargerPile(k) {
  let leftCount = 0;
  let rightCount = 0;
  
}

function markWinner(k, winner) {
  
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function main(k) {
  k.move();
  markWinner(k, beepersInLargerPile(k));

  for (let i = 0; i < 3; i++) k.move();
  k.turnLeft();
  k.move();
  k.move();
  turnRight(k);
  markWinner(k, beepersInLargerPile(k));

  k.turnLeft();
  k.move();
  k.move();
  k.turnLeft();
  for (let i = 0; i < 4; i++) k.move();
  turnRight(k);
  turnRight(k);
  markWinner(k, beepersInLargerPile(k));

  k.turnLeft();
  k.move();
  k.move();
  turnRight(k);
  for (let i = 0; i < 5; i++) k.move();
  markWinner(k, beepersInLargerPile(k));
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function isMarked(k) {
  
}

function collectMarked(k) {
  let count = 0;
  
  return count;
}

function main(k) {
  let total = 0;
  
}
  return main;
}
