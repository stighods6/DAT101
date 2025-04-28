"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let talle1 = '';
let talle2 = '';

for (let i = 1; i <= 10; i++) {  
  talle1 += i + ' ';  
  talle2 = i + ' ' + talle2; 
}

printOut (talle1);
printOut (talle2);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const svarNumber = 45;
let gjettteNumer = 0;
while(svarNumber !== gjettteNumer){
    gjettteNumer = Math.ceil(Math.random() * 60);
}
printOut("gjette numer = " + gjettteNumer.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

gjettteNumer = 0;
let guesscount = 0;
const starttime = Date.now();
while(svarNumber !== gjettteNumer){
    guesscount++;
    gjettteNumer = Math.ceil(Math.random() * 1000000);
}
const slutttid = Date.now();
const tidbrukt =slutttid - starttime;
printOut("antall gjetinger " + guesscount.toString() + " tok " + tidbrukt.toString() + " ms ");


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let primes = [];

for (let i = 2; i < 200; i++) {
  let isprime = true;
  
  let j = 2;
  while (j <= Math.sqrt(i)) {  
    if (i % j === 0) {
      isprime = false;
      break;
    }
    j++;
  }
  
  if (isprime) {
    primes.push(i);
  }
}

printOut("Prime: " + primes);  


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let col = 5
let row = 3

for ( let rekke = 1; rekke <= 7; rekke++) {
  let rekkenIhold = "";

  for( let rekke2 = 1; rekke2 <= 9; rekke2++) {
    rekkenIhold += `K${col}R${row} `;
  }
  printOut( rekkenIhold);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomGrade = Math.floor(Math.random() * 236) + 1;  
let percentage = (randomGrade / 236) * 100;  

let letterGrade;  
if (percentage >= 89) {
  letterGrade = 'A';  
} else if (percentage >= 77) {
  letterGrade = 'B';  
} else if (percentage >= 65) {
  letterGrade = 'C';  
} else if (percentage >= 53) {
  letterGrade = 'D';  
} else if (percentage >= 41) {
  letterGrade = 'E'; 
} else {
  letterGrade = 'F';  
}

// Output the result to the console
printOut(`kanidatt fikk: ${randomGrade} | poeng: ${percentage.toFixed(2)}% | karater : ${letterGrade}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

    function rollDice() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 6) + 1);
    }

    function countOccurrences(array) {
    const counts = {};
    for (let num of array) {
    counts[num] = (counts[num] || 0) + 1;
    }
     return Object.values(counts).sort((a, b) => b - a); 
    }

    function simulateThrows() {
    let fullStraightThrows = 0, threePairsThrows = 0;
    let towerThrows = 0, yahtzeeThrows = 0;

    let fullStraight = false, threePairs = false;
    let tower = false, yahtzee = false;

    while (!fullStraight || !threePairs || !tower || !yahtzee) {
    const dice = rollDice();
    const occurrences = countOccurrences(dice);
    const unique = new Set(dice);

    if (!fullStraight) {
    fullStraightThrows++;
    if (unique.size === 6) {
    fullStraight = true;
    }
    }

    if (!threePairs) {
    threePairsThrows++;
    if (occurrences.length === 3 && occurrences.every(val => val === 2)) {
    threePairs = true;
    }
    }

    if (!tower) {
    towerThrows++;
    if (occurrences[0] === 4 && occurrences[1] === 2) {
    tower = true;
    }
    }

    if (!yahtzee) {
    yahtzeeThrows++;
    if (occurrences[0] === 6) {
    yahtzee = true;
    }
    }
    }

        printOut(`Full Straight: ${fullStraightThrows} throws`);
        printOut(`Three Pairs: ${threePairsThrows} throws`);
        printOut(`Tower: ${towerThrows} throws`);
        printOut(`Yahtzee: ${yahtzeeThrows} throws`);
    }

    
    window.onload = simulateThrows;



const D1 = Math.ceil(Math.random() * 6);
const D2 = Math.ceil(Math.random() * 6);
const D3 = Math.ceil(Math.random() * 6);
const D4 = Math.ceil(Math.random() * 6);
const D5 = Math.ceil(Math.random() * 6);
const D6 = Math.ceil(Math.random() * 6);

let DT = "";
 DT += D1.toString() + ",";
 DT += D2.toString() + ",";
 DT += D3.toString() + ",";
 DT += D4.toString() + ",";
 DT += D5.toString() + ",";
 DT += D6.toString();

printOut(" terning kast" +  DT);

const teller1 = (DT.match(/1/g)|| "").lenght;
const teller2 = (DT.match(/2/g)||    "").lenght;
const teller3 = (DT.match(/3/g)|| "").lenght;
const teller4 = (DT.match(/4/g)|| "").lenght;
const teller5 = (DT.match(/5/g)|| "").lenght;
const teller6 = (DT.match(/6/g)|| "").lenght;

let tk = "";
tk += teller1.toString() + ",";
tk += teller2.toString() + ",";
tk += teller3.toString() + ",";
tk += teller4.toString() + ",";
tk += teller5.toString() + ",";
tk += teller6.toString();
printOut(" terning kast " + tk);

   


function terningkast() {
  let Counts = Array(6).fill(0);
  for (let i = 0; i < 6; i++) Counts[Math.floor(Math.random() * 6)]++;
  return Counts;
}

function checkCondition(Counts, condition) {
  let values = Counts.filter(v => v > 0);
  return (
    (condition === "full straight" && values.length === 6) ||
    (condition === "three pairs" && values.filter(v => v === 2).length === 3) ||
    (condition === "tower" && values.includes(4) && values.includes(2)) ||
    (condition === "yahtzee" && values.includes(6))
  );
}

function runSimulator() {
  const conditions = ["full straight", "three pairs", "tower", "yahtzee"];
  printOut("results").innerHTML = conditions.map(condition => {
    let rolls = 0;
    while (!checkCondition(terningkast(), condition)) rolls++;
    return `${condition}: ${rolls} rolls`;
  }).join("<br>");
}

window.onload = runSimulator;
printOut("hhhh" + runSimulator);
printOut("hhhh" + checkCondition);
printOut("hhhh" + terningkast);
printOut("hhhh" + array);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
