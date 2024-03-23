#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumner",
        type: "number",
        message: "Please Guess a Number between 1 to 10",
    },
]);
if (answer.userGuessNumner === randomNumber) {
    console.log("You Guess Right Number");
}
else {
    console.log("You Guess WRONG Number");
}
