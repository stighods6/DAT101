"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/


let wakeUpTime = 8;
const busstiden = 9;
const trainTime = 9;
if(wakeUpTime < busstiden){
  printOut(wakeUpTime + " o'clock then I can catch the bus to school ");
} else if (wakeUpTime <= trainTime){
  printOut (wakeUpTime + "kan ta bussen til skolen ");
}  else {
  printOut(wakeUpTime + "vis jeg tar toget ");
}

let wakeUpTime2 = 7;
const busstiden2 = 8;
const trainTime2 = 8;
if(wakeUpTime2 < busstiden2){
  printOut(wakeUpTime2 + " o'clock then I can catch the bus to school otherwise I have to take the car to school");
} else if (wakeUpTime2 <= trainTime2){
  printOut ("kan ta bussen til skolen  ");
}  else   {
  printOut( "vis jeg tar toget ");
}

let wakeUpTime3 = 6;
const busstiden3 = 8;
const trainTime3 = 8;
if(wakeUpTime3 < busstiden3){
  printOut(wakeUpTime3 + " I can take the bus to school otherwise if I wake up exactly at " + busstiden3);
} else if (wakeUpTime3 <= trainTime3){
  printOut ("kan ta bussen til skolen ");
}  else   {
  printOut( "vis jeg tar toget ");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const integer =3;

printOut("vaue = " + integer.toString());
if ( integer <0) {
  printOut("valut is negartiv");
} else if ( integer ==0)  {
  printOut("valut is zero");
} else {
  printOut( "valut is postive");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomIt =(min, max) => {
 min = Math.ceil(1)
 max = Math.floor(8)

 return Math.floor(Math.random() * (max - min  + 1)) + min;
} 
const sumittFilen = randomIt (1,8);
printOut("sumitted filen size " + sumittFilen.toString())

if ( sumittFilen >=4) {
  printOut(" thank you");
} else {
  printOut("the imigae is to samll")
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("sumtitet file size: " + sumittFilen.toString());
if ( sumittFilen >=6) {
  printOut(" image is to large");
} else if ( sumittFilen >=4) {
  printOut("thanks you")
} else {
  printOut("the image is to samll")
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const måndeListe =["januar", "februar", "mars", "april", "mai", "jun", "juli", "august", "september", 
  "oktober", "november", "desember"];

const noMoth = måndeListe.length; 
const måndNavn = måndeListe[Math.floor(Math.random() * noMoth)];

printOut("månden er = " + måndNavn);

if (måndNavn.includes("r")) {
printOut("you must take vitamin D");
} else {
  printOut("you do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let dagIMånden = null;
switch (måndNavn) {
  case "januar":
  case "mai":
  case "mars":
  case "juli":
  case "august":
  case "october":
  case "desmber":
  dagIMånden = 31;
break;
 case "april":
 case "juni":
 case "september":
 case "november":
  dagIMånden = 30;
  break;
  default:
   "october"
   
 dagIMånden = 28
}
printOut("det er " + dagIMånden + " dag i " + måndNavn);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let måndeListe6 =["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september","oktober", 
   "november","desmber", ];

const noMoth6 = måndeListe6.length; 
const måndNavn6 = måndeListe6[Math.floor(Math.random() * noMoth6)];

printOut("månden er = " + måndNavn6);


let dagIMånden6 = null;
switch (måndNavn6) {
  case "januar":
  case "februar":
  case "juni":
  case "juli":
  case "august":
  case "september":
  case "oktober":
  case "november":
  case "desmber":
  dagIMånden6 = "The gallery is open";
break;
 case "mars":
 case "mai":
 case "september":
 case "november":
  dagIMånden6 = "The gallery is temporarily closed";
  break;
  default:
   "april"
   
 dagIMånden6 = "The gallery is temporarily closed, open building next door"
}
printOut(dagIMånden6)

