#! /usr/bin/env node



import inquirer from "inquirer"

type ansType = {
     userGuess: number
}

const systemGeneratedNo = Math.floor(Math.random() *10);

const answers : ansType = await inquirer.prompt([
{
    type: "number",
    name: "userGuess",
    message: "write your guess: "

}

])

const {userGuess} = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, `sys`)
if(userGuess === systemGeneratedNo) {
    console.log("Yay Your answer is correct \n You win!")
}
else{
    console.log("Please try again better luck next time")
}