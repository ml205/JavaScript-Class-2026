// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-12
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  let first = "Kar";
  let second = "el";

  let word = first + second;  
  let count = word.length;   

  for (let i = 0; i < count; i++) {
    k.putBeeper();
    if (i < count - 1) {
      k.move();
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  let word = "beeper";

  let eCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "e") {
      eCount++;
    }
  }

  for (let i = 0; i < eCount; i++) {
    k.putBeeper();
  }

  let pPosition = word.indexOf("p");

  for (let i = 0; i < pPosition; i++) {
    k.move();
  }

  k.putBeeper();
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  let cmds = "m4l1M3L1m2";

  for (let i = 0; i < cmds.length; i += 2) {
    let command = cmds[i].toUpperCase();
    let count = Number(cmds[i + 1]);

    if (command === "M") {
      for (let j = 0; j < count; j++) {
        k.move();
      }
    } else if (command === "L") {
      for (let j = 0; j < count; j++) {
        k.turnLeft();
      }
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function main(k) {
  let plan = "RGBYC";

  let reversed = "";
  for (let i = plan.length - 1; i >= 0; i--) {
    reversed += plan[i];
  }
  let rotated = plan.slice(1) + plan[0];

  drawRow(k, plan);

  k.turnLeft();
  k.turnLeft();

  for (let i = 0; i < 4; i++) {
    k.move();
  }

  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  k.move();
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();

  drawRow(k, reversed);

  k.turnLeft();
  k.turnLeft();

  for (let i = 0; i < 4; i++) {
    k.move();
  }

  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  k.move();
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();

  drawRow(k, rotated);

  k.turnLeft();
}

function drawRow(k, plan) {
  for (let i = 0; i < plan.length; i++) {
    let color = "";

    if (plan[i] === "R") {
      color = "Red";
    } else if (plan[i] === "G") {
      color = "Green";
    } else if (plan[i] === "B") {
      color = "Blue";
    } else if (plan[i] === "Y") {
      color = "Yellow";
    } else if (plan[i] === "C") {
      color = "Cyan";
    }

    k.paintCorner(color);

    if (i < plan.length - 1) {
      k.move();
    }
  }
}
  return main;
}
