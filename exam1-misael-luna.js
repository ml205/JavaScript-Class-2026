// assignment: exam-1
// student: Misael Luna
// downloaded: 10/5/2026, 7:57:24 PM

// ===== Problem 1: Hallway Lights (5/5 worlds matched at last run) =====
function problem_1() {
function turnleft(k){
  k.turnLeft();
  k.turnLeft();
  }
function turnright(k){
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  }
  
  function row(k){
    if (k.cornerColorIs("Red")){
      k.paintCorner("Yellow")
      }
    if (k.beepersPresent()){
      k.pickBeeper();
      }
     if (k.frontIsClear()){
       k.move();
       }
    }
  
  function move(k){
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    k.turnLeft();
    k.move();
    k.turnLeft();
    }
    
    function moveb(k){
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    turnright(k)
    k.move();
    turnright(k)
    }
    
    function movec(k){
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    row(k)
    if (k.beepersInBag()){
      k.putBeeper();
      }
    }
function main(k) {
  move(k)
  moveb(k)
  move(k)
  moveb(k)
  move(k)
  moveb(k)
  move(k)
  movec(k)
}
  return main;
}
// ===== end Problem 1 =====

// ===== Problem 2: Sorting Stones (not run since last edit) =====
function problem_2() {
function turnleft(k){
  k.turnLeft();
  k.turnLeft();
  }
function turnright(k){
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  }

function source(k){
  let i = 1;
  for (i = 1; i < 7; i++){
   k.move();
   if(k.beepersPresent()){
     k.pickBeeper();
     }
   }
   turnleft(k);
     while (k.frontIsClear()){
       k.move();
       }
   }
   
   function nextrow(k){
     k.turnLeft();
     k.move();
     k.move();
     k.turnLeft();
     k.move();
     if (k.beepersInBag()){
       k.putBeeper();
       }
      turnleft(k);
      while (k.frontIsClear()){
        k.move();
        }
     }
   
   /*function color(k){
     if (k.cornerColorIs("Red")){
     k.pickBeeper();
     k.move();
     }
     else if (k.cornerColorIs("Blue")){
       k.pickBeeper();
       k.move();
       }
       else if (k.cornerColorIs("Green")){
         k.pickBeeper();
         k.move();
         }
   }*/
  
function main(k) {
    source(k);
    nextrow(k);
    nextrow(k);
    nextrow(k);
}
  return main;
}
// ===== end Problem 2 =====

// ===== Problem 3: Treasure Map (not run since last edit) =====
function problem_3() {
function checkavenue(k){
  while (k.beepersPresent()){
    k.pickBeeprs 
    } 
    let i = 0;
    for (i = 0; i =< 20; i++)
  }
  
  function checkstreet(k){
    k.move();
    while (k.beepersPresent()){
    k.pickBeeprs 
    } 
    let i = 0;
    for (i = 0; i =< 20; i++)
    }
  function color(k){
    if (checkavenue > checkstreet){
      k.paintcorner("Red");
      }
      else if (checkstreet > checkavenue){
        k.paintCorner("Blue");
        }
        else if (checkstreet = checkavenue){
          k.paintcorner("Green");
          }
    }
function main(k) {
 color(k);
}
  return main;
}
// ===== end Problem 3 =====
