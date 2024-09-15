"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let x = 2 * 6;
let y = -4;
let a = 2;
let f =-2 - 3 * 2 + 4 * 6;
let answer = (f + y * x - a);

printOut("answer = " + answer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const millinch = 25.4;
const millimeters = 1000;
const metres = 25.34;
const part2_answer = (metres * millimeters) / millinch;
const exactanswer = part2_answer.toFixed(2);

printOut("exactanswer = " + exactanswer);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const secondsinminute = 60;
const minutesinhour = 60;
const hoursinday = 24;

const part3_answer = (3 * hoursinday * minutesinhour) + (12 * minutesinhour) + 14 + (45 / secondsinminute);

printOut("answer = " + part3_answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 

const numberofminutes = 6322.52;
let part4_calc = numberofminutes / (60 * 24);
const part4_days = Math.floor(part4_calc);
printOut("days = " + part4_days);

part4_calc = part4_calc - part4_days;
part4_calc = part4_calc * hoursinday;
const part4_hours = Math.floor(part4_calc);
printOut("hours = " + part4_hours);

part4_calc = part4_calc -part4_hours;
part4_calc = part4_calc * minutesinhour;
const part4_minutes = Math.floor(part4_calc);
printOut("minutes = " + part4_minutes);

part4_calc = part4_calc -part4_minutes;
part4_calc = part4_calc * secondsinminute;
const part4_seconud = Math.floor(part4_calc);
printOut("seconds = " + part4_seconud);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ratenoktousd = 76 / 8.6;
const rateusdtonok = 76 / 8.6;
const amountusd = 54;
const amountnok = amountusd * rateusdtonok;
const usdconvert = amountnok / ratenoktousd;
const totaltnok = Math.round(amountnok);
const totaltusd = Math.round(usdconvert);

printOut("nok = " + totaltnok);
printOut("usd = " + totaltusd);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = "There is much between heaven and earth that we do not understand.";
   printOut("text= " + text);

    let length = text.length;
    printOut("number = " + length);

    
    let charAt19 = text[19]; 
    printOut("posison = " + charAt19);

    let charsFrom35 = text.substring(35, 35 + 8); 
    printOut("position 35 and 8 = " + charsFrom35);

  
    let indexEarth = text.indexOf("earth");
    printOut("index = " + indexEarth);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const resultat1 = "a" > "b";
const resultat2 = "a" >= "a";
const resultat3 = "a" > "b";
const resultat4 = "1" < "a";
const resultat5 = "2500" < "abcd";
const resultat6 = "arne" !== "thomas";
const restulta7 = 2 === 5;
const restulta8 = "abcd" > "bcd";

printOut("Is 5 greater than 3? = " + resultat1);
printOut("is 7 greater than or equal to 7? = " + resultat2);
printOut("is a greater than b? = " + resultat3);
printOut("is 1 less than a? = " + resultat4);
printOut(" Is 2500 less than abcd? = " + resultat5);
printOut("arne is not equal to thomas = " + resultat6);
printOut("2 equals 5 is this statement true? = " + restulta7);
printOut("abcd is greater than bcd is this statement false? = " + restulta8);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text1 = "254";
const text2 = "57.23";
const text3 = "25";

printOut("From text 254 to a number = " + text1);
printOut("From text 57.23 to a number = " + text2);
printOut("From text 25 kroner to a number = " + text3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let nummer = Math.floor(Math.random() * 360) + 1;

printOut("random nummer = " + nummer);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

var totalDays = 131;
var weeks = Math.floor(totalDays / 7);
var days = totalDays % 7;

printOut(totalDays + " er samme som " + weeks+ " uker også "+ days + " days");
printOut(newLine);