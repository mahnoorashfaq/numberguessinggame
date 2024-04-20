#! /usr/bin/env node
import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random() * 6+1);
const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Pleased guessed a number between 1-6",
    }
]);
// If else condition
if (answers.userGuessedNumber === randomNumber){
    console.log ("Congratulation! you guessed right number");
}
else {
    console.log ("you guessed wrong number");
}