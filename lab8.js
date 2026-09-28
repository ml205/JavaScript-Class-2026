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
function right(k) {
 k.turnLeft();
 k.turnLeft();
 k.turnLeft();
}

function turnAround(k) {
 k.turnLeft();
 k.turnLeft();
}

function main(k) {
let checkingRows = true;
while (checkingRows) {

 let redCount = 0;
 let greenCount = 0;

if (k.cornerColorIs("Red")) {
 redCount++;
 } else if (k.cornerColorIs("Green")) {
 greenCount++;
 }

 while (k.frontIsClear()) {
  k.move();
 if (k.cornerColorIs("Red")) {
 redCount++;
 }
 else if (k.cornerColorIs("Green")) {
 greenCount++;
  }
  }
        
 turnAround(k);
 while (k.frontIsClear()) {

 if (redCount > greenCount) {

 if (k.cornerColorIs("Red")) {
 } else if (k.cornerColorIs("Green")) {
 } else {
 k.paintCorner("Red");
 }

 } else if (greenCount > redCount) {

 if (k.cornerColorIs("Red")) {
 } else if (k.cornerColorIs("Green")) {
 } else {
 k.paintCorner("Green");
 }
 } else {

 if (k.cornerColorIs("Red")) {
 } else if (k.cornerColorIs("Green")) {
 } else {
 k.paintCorner("Yellow");
 }
 }
 k.move();
 }
 if (redCount > greenCount) {

 if (k.cornerColorIs("Red")) {
 } else if (k.cornerColorIs("Green")) { 
   
 } else {
 k.paintCorner("Red");
 }

 } else if (greenCount > redCount) {
 if (k.cornerColorIs("Red")) {
 } else if (k.cornerColorIs("Green")) {
 } else {
 k.paintCorner("Green");
 }

 } else {
 if (k.cornerColorIs("Red")) {
 } else if (k.cornerColorIs("Green")) {
 } else {
 k.paintCorner("Yellow");
 }

 }
 turnAround(k);    
 k.turnLeft();   
 if (k.frontIsClear()) {
  k.move();     
  right(k);    
 } else {
  checkingRows = false;
   }
 }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: hard (Hard)
// ──────────────────────────────────────────────────────────
function problem_4() {
function right(k) {
    k.turnLeft();
    k.turnLeft();
    k.turnLeft();
}

function turnaround(k) {
    k.turnLeft();
    k.turnLeft();
}

function main(k) {
    let rowNumber = 1;
    let bestRow = 1;
    let mostBeepers = 0;
    let checkingRows = true;

    // Check every row
    while (checkingRows) {
        let rowCount = 0;

        if (k.beepersPresent()) {
            rowCount++;
        }

        while (k.frontIsClear()) {
            k.move();

            if (k.beepersPresent()) {
                rowCount++;
            }
        }

        if (rowCount > mostBeepers) {
            mostBeepers = rowCount;
            bestRow = rowNumber;
        }

        // Return to west wall
        turnaround(k);

        while (k.frontIsClear()) {
            k.move();
        }

        // Move to next row
        right(k);

        if (k.frontIsClear()) {
            k.move();
            right(k);
            rowNumber++;
        } else {
            checkingRows = false;
        }
    }

    turnaround(k);

    while (rowNumber > bestRow) {
        k.move();
        rowNumber = rowNumber - 1;
    }

    k.turnLeft();

    let collected = 0;

    if (k.beepersPresent()) {
        k.pickBeeper();
        collected++;
    }

    while (k.frontIsClear()) {
        k.move();

        if (k.beepersPresent()) {
            k.pickBeeper();
            collected++;
        }
    }
    turnaround(k);

    while (k.frontIsClear()) {
        k.move();
    }

    for (let i = 0; i < collected; i++) {
        k.putBeeper();
    }
}
  return main;
}
