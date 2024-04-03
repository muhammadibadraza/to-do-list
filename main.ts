#! /usr/bin/env node

import inquirer from "inquirer";
console.log("          : WELCOME TO IBAD RAZA'S TODO APP :      ");

let todos = [];
let condition = true;

while(condition)
{let todoQuestions = await inquirer.prompt(
    [
        {
            name: "firstQuestion",
            type: "input",
            message: "What do you want to add in to your Todos : ",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more in your Todos? ",
            default: "true",
        }
    ]
);

todos.push(todoQuestions.firstQuestion);
console.log(todos);
condition = todoQuestions.secondQuestion;
}

if(todos.length > 0){
    console.log("Your todo list is: ");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
