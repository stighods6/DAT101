"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const accountType = {
    normal: "brukskonto",
    savings: "sparekonto",
    credit: "kreditkonto",
    pension: "penisjonkonto"
};

const accountValues = Object.values(accountType);
const output = accountValues.join(", ");


printOut(output);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount {
    #type; 

    constructor(accountType) {
        this.#type = accountType || "Unknown"; 
    }
    toString() {
        return `Account Type: ${this.#type}`;
    }
    setType(aType) {
        if (aType !== this.#type) { 
            printOut(`Changing account type from "${this.#type}" to "${aType}"...`);
            this.#type = aType;
        } 
    }
 
}

const myAccount = new TAccount("Brukskonto");
printOut(myAccount.toString()); 
myAccount.setType("Sparekonto");
printOut(myAccount.toString()); 
myAccount.setType("Sparekonto");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class taccount2 {
    constructor(type2) {
    this.type2 = type2;
    this.balance2 = 0;
}

deposit(amount2) {
    this.balance2 += amount2;
    printOut(`Deposit of ${amount2}, new balance is ${this.balance2}`);
}

withdraw(amount2) {
    this.balance2 -= amount2;
    printOut (`Withdrawal of ${amount2}, new balance is ${this.balance2}`);
    
}
getbalance() {
    return this.balance2;
}

}
const myAccount2 = new taccount2("brukkonto");
myAccount2.deposit(100);
myAccount2.withdraw(25);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount3 {
    constructor(type) {
        this.type3 = type; 
        this.balance3 = 0; 
        this.withdrawCount = 0; 
    }

    setType(newType3) {
        printOut(`Account is changed from ${this.type3} to ${newType3}`);
        this.type3 = newType3;
        this.withdrawCount = 0; 
    }

    deposit(amount3) {
        this.balance3 += amount3;
        this.withdrawCount = 0; 
        printOut(`Deposit of ${amount3}, new balance is ${this.balance3}`);
    }

  
    withdraw(amount3) {
        if (this.type3 === "Pension") {
            printOut("You can't withdraw from a Pensionskonto!");
            return;
        }
        if (this.type3 === "Saving" && this.withdrawCount >= 3) {
            printOut("You can't Withdraw from a Sparekonto more than three times!");
            return;
        }

        if (amount3 > this.balance3) {
            printOut("Insufficient balance for withdrawal.");
        } else {
            this.balance3 -= amount3;
            this.withdrawCount++;
            printOut(`Withdrawal of ${amount3}, new balance is ${this.balance3}`);
        }
    }

    getBalance() {
        return this.balance3;
    }
}

const myAccount3 = new TAccount3("Saving");

myAccount3.deposit(25);
myAccount3.deposit(75);
myAccount3.withdraw(30);
myAccount3.withdraw(30);
myAccount3.withdraw(30);
myAccount3.withdraw(10); 

myAccount3.setType("Pension");
myAccount3.withdraw(10); 

myAccount3.setType("Saving");
myAccount3.withdraw(10); 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const CurrencyTypes = {
    NOK: { denomination: "kr" },
    USD: { denomination: "$" },
    EUR: { denomination: "€" },
    GBP: { denomination: "£" }
};


class TAccount5 {
    constructor(type5, currencyType = "NOK") {
        this.type = type5; 
        this.balance5 = 0; 
        this.currencyType = currencyType; 
    }
    deposit(amount5) {
        this.balance5 += amount5;
        printOut(`Deposit of ${amount5}${CurrencyTypes[this.currencyType].denomination}, new balance is ${this.balance5}${CurrencyTypes[this.currencyType].denomination}`);
    }
    setCurrencyType(newCurrency) {
        if (newCurrency === this.currencyType) {
            printOut(`Currency is already set to ${newCurrency}.`);
        } else {
            printOut(`Currency changed from ${this.currencyType} to ${newCurrency}.`);
            this.currencyType = newCurrency;
        }
    }
}

const myAccount5 = new TAccount5("Saving");
myAccount5.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Static object holding currency types
const CurrencyTypes6 = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" }
};

class TAccount6 {
    constructor(currencyType = "NOK") {
        this.balance = 0;             
        this.currencyType6 = currencyType; 
    }
    deposit(amount6) {
        this.balance6 += amount6;
        this.printBalance();
    }
    setCurrencyType(newCurrency) {
        if (newCurrency === this.currencyType6) {
            printOut(`Currency is already set to ${newCurrency}.`);
            return;
        }

        const oldCurrency = this.currencyType6;
        this.balance6 = (this.balance6 * CurrencyTypes6[newCurrency].value / CurrencyTypes6[oldCurrency].value).toFixed(2);
        this.currencyType6 = newCurrency;

        printOut(`Currency changed from ${oldCurrency} to ${newCurrency}.`);
        this.printBalance();
    }
    printBalance() {
        printOut(`New balance is ${this.balance6}${CurrencyTypes6[this.currencyType6].denomination}`);
    }
}

const myAccount6 = new TAccount6(); 

myAccount6.deposit(150);           
myAccount6.setCurrencyType("SEK"); 
myAccount6.setCurrencyType("USD"); 
myAccount6.setCurrencyType("NOK"); 


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



class Account7 {
    constructor() {
        this.balance7 = 0;
        this.currency7 = "NOK";
    }

    setCurrency(currency7) {
        this.currency7 = currency7;
        printOut(`The account currency has changed to ${currency7}`);
    }

    transaction(amount7, type7, currency7 = "NOK") {
        this.balance7 += type7 === "deposit" ? amount7 : -amount7;
        printOut(
            `${type7 === "deposit" ? "Deposit" : "Withdrawal"} of ${amount7.toFixed(2)} ${currency7}, new balance is ${this.balance7.toFixed(2)} ${this.currency7}`
        );
    }
}

const account7 = new Account7();

account7.transaction(12, "deposit", "USD");
account7.transaction(10, "withdraw", "GBP");

account7.setCurrency("CAD");
printOut(`New balance is ${account7.balance7.toFixed(2)} C$`);

account7.setCurrency("INR");
account7.transaction(1111.06, "deposit", "INR");
account7.transaction(150.11, "withdraw", "SEK");


printOut("Replace this with you answer!");
printOut(newLine);
