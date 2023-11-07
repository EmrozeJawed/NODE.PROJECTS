#! /usr/bin/env node 
import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            messsage: "What do you want to add in your todo "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todo.push(TODO);
    }
    else {
        console.log("kindly add valid inuput");
    }
}
if (todo.length > 0) {
    console.log("Your New Todo List");
    todo.forEach(TODO => {
        console.log(todo);
    });
}
else {
    console.log("No Todos Found");
}
