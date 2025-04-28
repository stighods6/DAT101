"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printNorwegianDate() {
    const today = new Date();
    const formattendate = today.toLocaleDateString('no-NB', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    printOut(formattendate);
}

printNorwegianDate();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// countdown.mjs
function calculateCountdown(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const differenceInTime = target - now; // Difference in milliseconds
    const daysLeft = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    return daysLeft;
}

function displayCountdown(targetDate, eventName) {
    const daysLeft = calculateCountdown(targetDate);
    const today = new Date();
    const dateFormatted = today.toLocaleDateString('no-NO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    printOut(`${dateFormatted}`);
    printOut(`It is ${daysLeft} days to release of ${eventName}`);
}

// Set the target date and event name
const targetDate = '2020-11-12'; // Sony PlayStation 5 release date
const eventName = 'Sony Playstation 5';

// Output the countdown
displayCountdown(targetDate, eventName);



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/




function calculateCircleProperties(radius) {
    if (radius <= 0) {
        printOut("Radius must be greater than 0");
        return;
    }

    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut(`For a circle with radius ${radius}:`);
    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference: ${circumference.toFixed(2)}`);
    printOut(`Area: ${area.toFixed(2)}`);
}


calculateCircleProperties(5);
;
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateRectangleProperties(rectangle) {
    const { width, height } = rectangle;

 
    const circumference = 2 * (width + height);
    const area = width * height;

    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}


const rectangle = { width: 5, height: 10 };
calculateRectangleProperties(rectangle);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ETemperaturType = { celsius: 1, fahrenheit: 2, kelvin: 3 };

function convertTemperature(aTemperature, aType) {
    let fahrenheit = 0;
    let celsius = 0;
    let kelvin = 0;

    switch (aType) {
        case ETemperaturType.celsius:
            celsius = aTemperature;
            fahrenheit = (celsius * 9) / 5 + 32;
            kelvin = celsius + 273.15;
            break;

        case ETemperaturType.fahrenheit:
            fahrenheit = aTemperature;
            celsius = ((fahrenheit - 32) * 5) / 9;
            kelvin = celsius + 273.15;
            break;

        case ETemperaturType.kelvin:
            kelvin = aTemperature;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9) / 5 + 32;
            break;

        default:
            printOut("Unknown temperature type.");
            return;
    }

    printOut("Celsius = " + celsius.toFixed(0));
    printOut("Fahrenheit = " + fahrenheit.toFixed(0));
    printOut("Kelvin = " + kelvin.toFixed(0));
}

convertTemperature(37.5, ETemperaturType.celsius);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



function calculateNetPrice(aprice, aTaxGroup) {
    let net = NaN;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;
    printOut("taxGroup = " + taxGroup);

    switch (taxGroup) {
        case "NORMAL":
            vat = 25;
            break;
        // Add more cases as needed
        default:
            printOut("Unknown VAT group.");
    }

    if (!Number.isNaN(vat)) {
        net = (100 * aprice) / (vat + 100);
    }
    return net;
}

const netprice = calculateNetPrice(100, "normal");

if (Number.isNaN(netprice)) {
    printOut("Unknown VAT group!");
} else {
    printOut("netPrice = " + netprice.toFixed(2));
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 

function calculateSpeedDistanceTime(speed, distance, time) {
  
    const missingCount = [speed, distance, time].filter(value => value == null).length;

   
    if (missingCount > 1) {
        return { speed: undefined, distance: undefined, time: NaN };
    }

    if (speed == null) {
        speed = distance / time;
    } else if (distance == null) {
        distance = speed * time;
    } else if (time == null) {
        time = distance / speed;
    }

    return { speed, distance, time };
}

function displayResults(speed, distance, time) {
    const result = calculateSpeedDistanceTime(speed, distance, time);

  
    printOut("Speed", result.speed?.toFixed(2), "km/h");
    printOut("Distance", result.distance?.toFixed(2), "km");
    printOut("Time", result.time?.toFixed(2), "h");

   
    printOut("", "", "");
}

displayResults(75, 50, 0.67);
displayResults(60, 120, 2.0);
displayResults(70, 105, 1.5);
displayResults(null, 50, NaN);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function modifyText(text, maxSize, character, addBefore) {
  
    if (text.length < maxSize) {
        const charsToAdd = maxSize - text.length;
        const padding = character.repeat(charsToAdd);

       
        if (addBefore) {
            text = padding + text;
        } else {
            text = text + padding;
        }
    }

  printOut(text);
    return text;
}
modifyText("Hello", 10, "*", true);   
modifyText("World", 12, "-", false);  


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testIfMathIsFun() {
    let op = 1;
    let line = 1;
    let maxline = 7;

    while (line <= maxline) {
        let leftside = "";
        let rightside = "";

        // Generate left side
        for (let i = 0; i < line; i++) {
            leftside += op.toString().padEnd(4, " ");
            op++;
        }

        // Generate right side
        for (let i = 0; i < line; i++) {
            rightside += op.toString().padEnd(4, " ");
            op++;
        }

        // Print the current line
        printOut(leftside + "= " + rightside.trim());
        line++;
    }
    // Print the final message
    printOut("Mathematics is fun!");
}

testIfMathIsFun();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }
   
    return n * factorial(n - 1);
}


let number = 5;
printOut(`Factorial of ${number} is: ${factorial(number)}`);

printOut(newLine);
