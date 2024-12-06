"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let text = "";
for (let i = 0; i < numbers.length; i++ ) {
    text += numbers[i] + " "; 
}
printOut(text);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut(numbers.join(" , "));
printOut("");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tekst = "hei på deg, hvordan går det";
const ord  = tekst.split(" ");

for(let i = 0; i < ord.length; i++) {
    printOut(`nummer: ${i + 1}, Ord: ${ord[i]}<br>`);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const jenter = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", 
    "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", 
    "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];

function removeElementFromArray(aArray, aitem) {
    const result = aArray.indexOf(aitem);

    if (result > -1) {
    
        printOut("can remove " + " " + aitem + " from arry" );  
    } else {
        printOut("can not remove " + " " + aitem + " from arry ");
    }
}

function findAbdRemoveFromArry (aArray, aitem) {
const result = aArray.find(findName);
if(result) {
    printOut("can remove" + " " + aitem + " from arry");
} else {
    printOut("can not remove" + " " + aitem + " from arry");
}

function findName(aName) {
    return aName === aitem;
}
}
findAbdRemoveFromArry (jenter, "lisa");
removeElementFromArray( jenter, "Nina");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"]
const names =jenter.concat(boys);
//const names = [...girls, ...boys];
names.forEach(printname);
function printname(aName) {
    printOut(aName);
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    #Title;
    #Author;
    #Isbn;

    constructor(title, author, isbn) {
    this.#Title = title; 
    this.#Author = author;
    this.#Isbn = isbn; 
    }

    toString() {
    return this.#Title + " , " + this.#Author + " , " + this.#Isbn;
    }
}

const books = [
    new TBook("The Hobbit", "J.R.R. Tolkien", "978-0-395-07122-1"),
    new TBook("The Shining", "Stephen King", "978-0-385-12167-5"),
    new TBook("The Da Vinci Code", "Dan Brown", "978-0-385-50420-5")
];


printOut(books[0].toString());
printOut(books[1].toString());
printOut(books[2].toString());

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

        const eWeekDays = {
            weekDay1: { value: 0x01, name: "Monday" },
            weekDay2: { value: 0x02, name: "Tuesday" },
            weekDay3: { value: 0x04, name: "Wednesday" },
            weekDay4: { value: 0x08, name: "Thursday" },
            weekDay5: { value: 0x10, name: "Friday" },
            weekDay6: { value: 0x20, name: "Saturday" },
            weekDay7: { value: 0x40, name: "Sunday" },
            workDays: { value: 0x01 | 0x02 | 0x04 | 0x08 | 0x10, name: "Workdays" },
            weekends: { value: 0x20 | 0x40, name: "Weekend" },
        };

        const keys = Object.keys(eWeekDays);
        const outputDiv = document.getElementById("output");

        if (outputDiv) {
            keys.forEach(key => {
                const element = eWeekDays[key];
                const content = `Key: ${key}, Value: ${element.value}, Name: ${element.name}`;

                printOut(content); 
                const paragraph = document.createElement("p");
                paragraph.textContent = content;
                outputDiv.appendChild(paragraph);
            });
        } else {
            printOut("Element with ID 'output' not found.");
        }

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numberst = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
const ascending = [...numberst].sort((a, b) => a - b);
const descending = [...numberst].sort((a, b) => b - a);

printOut("Original Array:" + numberst);
printOut("Ascending Order:" + ascending);
printOut("Descending Order:" + descending);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const countMap = {};
ascending+numberst+descending.forEach(num => {
    countMap[num] = (countMap[num] || 0) + 1;
});

const frequency = {};
ascending+numberst+descending.forEach(num => frequency[num] = (frequency[num] || 0) + 1);


for (let num in frequency) {
    printOut(`<p>Number ${num}: ${frequency[num]} times</p>`);
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const array2D = [];
for (let i = 0; i < 5; i++) {
  array2D[i] = [];
  for (let j = 0; j < 9; j++) {
    array2D[i][j] = `Row ${i + 1}, Column ${j + 1}`;
  }
}

array2D.forEach(row =>(row.join(" | ")));
array2D.forEach((row, i) => {
  row.forEach((cell, j) => {
    printOut(`Cell at Row ${i + 1}, Column ${j + 1}: ${cell}`);
  });
});


printOut(newLine);
