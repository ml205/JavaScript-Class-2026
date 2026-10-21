// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-11
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function countPile(k) {
  let count = 0;

  while (k.beepersPresent()) {
    k.pickBeeper();
    count++;
  }

  for (let i = 0; i < count; i++) {
    k.putBeeper();
  }

  return count;
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

function processStreet(k) {
  let leftCount = 0;
  let rightCount = 0;

  leftCount = leftCount + countPile(k);
  k.move();

  leftCount = leftCount + countPile(k);
  k.move();

  leftCount = leftCount + countPile(k);
  k.move();

  k.move();

  rightCount = rightCount + countPile(k);
  k.move();

  rightCount = rightCount + countPile(k);
  k.move();

  rightCount = rightCount + countPile(k);

  k.move();
  k.move();

  let total = leftCount + rightCount;

  for (let i = 0; i < total; i++) {
    k.putBeeper();

    if (i < total - 1) {
      k.move();
    }
  }

  turnAround(k);

  while (k.frontIsClear()) {
    k.move();
  }

  turnAround(k);
}

function main(k) {

  processStreet(k);

  k.turnLeft();
  k.move();
  turnRight(k);
  processStreet(k);

  k.turnLeft();
  k.move();
  turnRight(k);
  processStreet(k);

  k.turnLeft();
  k.move();
  turnRight(k);
  processStreet(k);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  let totalBeepers = 17;
  let boxSize = 5;

  let fullBoxes = Math.floor(totalBeepers / boxSize);
  let leftover = totalBeepers % boxSize;

  for (let i = 0; i < fullBoxes; i++) {

    for (let j = 0; j < boxSize; j++) {
      k.putBeeper();
    }

    k.move();
  }
  
  for (let i = 0; i < leftover; i++) {
    k.putBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
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

    for (let street = 1; street <= 6; street++) {

        for (let avenue = 1; avenue <= 7; avenue++) {

            let beepers = (avenue * street) % 5;

            for (let i = 0; i < beepers; i++) {
                k.putBeeper();
            }

            if (avenue < 7) {
                k.move();
            }
        }

        if (street == 6) {
            break;
        }

        turnAround(k);

        while (k.frontIsClear()) {
            k.move();
        }

        turnRight(k);
        k.move();

        turnRight(k);
    }
}
  return main;
}
