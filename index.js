#!/usr/bin/env node
import inquirer from "inquirer";
const anwer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "firstnum" },
    { message: "Enter Second number", type: "number", name: "secondnum" },
    {
        message: "Select operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (anwer.operator === "addition") {
    console.log(anwer.firstnum + anwer.secondnum);
}
else if (anwer.operator === "subtraction") {
    console.log(anwer.firstnum - anwer.secondnum);
}
else if (anwer.operator === "multiplication") {
    console.log(anwer.firstnum * anwer.secondnum);
}
else {
    console.log(anwer.firstnum / anwer.secondnum);
}
