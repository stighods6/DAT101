"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

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
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

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

const like1 = tk.match(/1/g) // ",";       


printOut(newLine);

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
