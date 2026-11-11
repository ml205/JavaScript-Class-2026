// The letter code: a pile of n beepers stands for LETTERS[n].
// Slot 0 is a space and is never used, so "A" is 1, "B" is 2, … "Z" is 26.
const LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The swap list: a word found on the left is replaced by its partner on the right.
const SWAP = {
  HOT: "COLD",  UP: "DOWN",   YES: "NO",   FAST: "SLOW",
  I: "YOU",     GOOD: "BAD",  ON: "OFF",   WET: "DRY",
  BIG: "TINY",  CAT: "DOG",   SUN: "MOON", NEW: "OLD",
};

function takePile(k) {
    let number = 0;

    while (k.beepersPresent()) {
        k.pickBeeper();
        number++;
    }

    return number;
}

function dropPile(k, number) {
    for (let i = 0; i < number; i++) {
        k.putBeeper();
    }
}

function main(k) {
let word = "";

    k.move();

    for (let i = 0; i < 3; i++) {
        let number = takePile(k);
        word = word + LETTERS[number];

        if (i < 2) {
            k.move();
        }
    }

    let newWord = SWAP[word];

    if (newWord === undefined) {
        return;
    }

    k.turnLeft();
    k.turnLeft();

    while (k.frontIsClear()) {
        k.move();
    }

    k.turnLeft();
    k.turnLeft();

    for (let i = 0; i < 6; i++) {
        k.move();
    }

    for (let i = 0; i < newWord.length; i++) {
        let number = LETTERS.indexOf(newWord[i]);
        dropPile(k, number);

        if (i < newWord.length - 1) {
            k.move();
        }
    }
}











// The colors that appear in these worlds.
const COLORS = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Magenta", "Pink"];

function turnRight(k) {
    k.turnLeft();
    k.turnLeft();
    k.turnLeft();
}

function readColor(k) {
    for (let i = 0; i < COLORS.length; i++) {
        if (k.cornerColorIs(COLORS[i])) {
            return COLORS[i];
        }
    }

    return "";
}

function main(k) {
 k.move();

    let oldColor = readColor(k);

    k.move();

    let newColor = readColor(k);

    k.turnLeft();
    k.turnLeft();

    while (k.frontIsClear()) {
        k.move();
    }

    turnRight(k);
    k.move();
    turnRight(k);

    for (let row = 2; row <= 8; row++) {
        for (let col = 1; col <= 11; col++) {
            let color = readColor(k);

            if (color === oldColor) {
                k.paintCorner(newColor);
            }

            if (col < 11) {
                k.move();
            }
        }

        if (row < 8) {
            if (k.facingEast()) {
                k.turnLeft();
                k.move();
                k.turnLeft();
            } else {
                turnRight(k);
                k.move();
                turnRight(k);
            }
        }
    }
}
