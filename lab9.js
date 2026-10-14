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

function turnaround(k) {
k.turnLeft();
k.turnLeft();
}

function turnright(k) { 
k.turnLeft();
k.turnLeft();
k.turnLeft();
k.move();
k.turnLeft();
k.turnLeft();
k.turnLeft();
}

function isTreasure(k) {
    return k.cornerColorIs("Blue") && k.beepersPresent();
}

function problem(k) {

if (isTreasure(k)) {
   k.pickBeeper();
    }

 while (k.frontIsClear()) {
  k.move();

  if (isTreasure(k)) {
 k.pickBeeper();
        }
    }
}

function main(k) {

    problem(k);   
    turnleft(k);

    problem(k);  
    turnright(k);

    problem(k);     
    turnleft(k);

    problem(k);  
    turnright(k);

    problem(k);   
    turnleft(k);

    problem(k);  
    turnright(k);

    problem(k);      
    turnleft(k);

    problem(k);    
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function turnRight(k) {
    k.turnLeft();
    k.turnLeft();
    k.turnLeft();
}

function countGreen(k) {
    let count = 0;

    if (k.cornerColorIs("Green")) {
        count++;
    }

    while (k.frontIsClear()) {
        k.move();
        if (k.cornerColorIs("Green")) {
            count++;
        }
    }

    k.turnLeft();
    k.move();
    k.turnLeft();

    // Row 2
    if (k.cornerColorIs("Green")) {
        count++;
    }

    while (k.frontIsClear()) {
        k.move();
        if (k.cornerColorIs("Green")) {
            count++;
        }
    }

    turnRight(k);
    k.move();
    turnRight(k);

    if (k.cornerColorIs("Green")) {
        count++;
    }

    while (k.frontIsClear()) {
        k.move();
        if (k.cornerColorIs("Green")) {
            count++;
        }
    }

    return count;
}

function main(k) {
    let count = countGreen(k);

    for (let i = 0; i < count; i++) {
        k.putBeeper();
    }
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

  while (k.beepersPresent()) {
    k.pickBeeper();
    leftCount++;
  }

  k.move();

  while (k.beepersPresent()) {
    k.pickBeeper();
    rightCount++;
  }

  turnAround(k);
  k.move();
  turnAround(k);

  if (leftCount > rightCount) {
    return "left";
  }

  return "right";
}

function markWinner(k, winner) {

  if (winner == "left") {
    k.paintCorner("Red");
  } else {
    k.move();
    k.paintCorner("Red");

    turnAround(k);
    k.move();
    turnAround(k);
  }
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
  return k.beepersPresent() && k.cornerColorIs("Orange");
}

function collectMarked(k) {
  let count = 0;

  if (isMarked(k)) {
    k.pickBeeper();
    count++;
  }

  while (k.frontIsClear()) {
    k.move();

    if (isMarked(k)) {
      k.pickBeeper();
      count++;
    }
  }

  return count;
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function main(k) {
  let total = 0;
  let count = 0;

  count = collectMarked(k);
  total = total + count;

  k.turnLeft();
  k.move();
  k.turnLeft();

  count = collectMarked(k);
  total = total + count;

  turnRight(k);
  k.move();
  turnRight(k);

  count = collectMarked(k);
  total = total + count;

  k.turnLeft();
  k.move();
  k.turnLeft();

  count = collectMarked(k);
  total = total + count;

  turnRight(k);
  k.move();
  turnRight(k);

  count = collectMarked(k);
  total = total + count;

  k.turnLeft();
  k.move();
  k.turnLeft();

  count = collectMarked(k);
  total = total + count;

  turnRight(k);
  k.move();
  turnRight(k);

  count = collectMarked(k);
  total = total + count;

  k.turnLeft();
  k.move();
  k.turnLeft();

  count = collectMarked(k);
  total = total + count;

  while (total > 0) {
    k.putBeeper();
    total--;
  }
}
  return main;
}
