#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(`Your Word Count Is ${words.length} `);
