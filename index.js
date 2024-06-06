#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome To 'CodeWithNoor' - Currency Convertor\n"));
// Define The List Of Currencies And Their Exchange Rates 
let Exchange_rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency (Euro)
    "JYP": 113, //Japenese Cureency (Yen)
    "CAD": 1.3, // Canadian Doller
    "AUD": 1.65, // Australian Doller
    "PKR": 277.70, //Pakistan Rupees 
    // Add More Currencies And Their Exchange Rates Here
};
// Prompt The User To Select Currencies To Convert From And To 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//Perform Currency Conversion By Using Formula 
let from_amount = Exchange_rate[user_answer.from_currency];
let to_amount = Exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula Of Conversion 
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display The Converted Ammount
console.log(`converted amount = ${chalk.green(converted_amount.toFixed(2))}`);
