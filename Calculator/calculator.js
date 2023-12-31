import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Please enter Your first number",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Please enter Your second number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "select operator",
    },
]);
let { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("your result is:", result);
}
else {
    console.log("Kindly enter valid input");
}
