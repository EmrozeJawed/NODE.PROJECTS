#! /usr/bin/env node 

import inquirer from "inquirer";

let convertion = {
   "PKR": {
     "USD": 0.0044,
     "GBP": 0.0037,
     "PKR": 1
   },
    "GBP": {
      "USD": 1.21,
      "PKR": 271.79,
      "GBP": 1
  },
    "USD": {
       "PKR": 225.50,
       'GBP': 0.83,
       "USD": 1
  }
}

const answer: {
     from: "USD" | "PKR" | "GBP",
     to: "USD" | "PKR" | "GBP",
     amount: number
}= await inquirer.prompt([
    {

        type: "list",
        name: "from",
        choices: ["USD", "PKR", "GBP"],
        message: "Select Your Currency"
        
    },
    {
        
        type: "list",
        name: "to",
        choices: ["USD", "PKR", "GBP"],
        message: "select Your Convertion Currency"
    },
     {
      
        type: "number",
        name: "amount",
        message: "Enter Your Convertion Amount"
    
     }
]);

const {from, to, amount,} = answer;
if (from && to && amount) {
 let result =  convertion[from][to] * amount
 console.log(`Your Convertion From ${from} to ${to} is ${result}`)
}
else {
 console.log("Invalid Inputs")
}