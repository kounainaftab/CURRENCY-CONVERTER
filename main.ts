import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \ tWelcome to mychannel. Currency Converter\n"));

//Define the list of curriencies and their exchange rates
let exchange_rate: any ={
    "USD":1, // Base Currency
    "EUR":0.9, // European Currency(Euro)
    "JYP":113, // Japense Currency(Ven)
    "CAD":1.3, // Canadian Dollar
    "AUD":1.65, //Australian Dollar
     "PKR":280, //Pakistani Rupees
     // Add more currencies and their exchange rates here
}

// Pront the user to select currencies to convert from and to
let user_answer = await  inquirer.prompt([
    {
          name:"from_currency",
          type:"list",
          message:"Select the currency to convert from:",
          choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"
    }
]);

// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount /from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log('Converted Amount = ${chalk.green(converted_amount.tofixed(2))}');
