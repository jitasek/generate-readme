// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your name: ",
            name: "Name",
        },
        {
            type: "input",
            message: "Enter your bio: ",
            name: "Bio",
        },
        {
            type: "input",
            message: "Enter your github link: ",
            name: "GitHub",
        },
        {
            type: "input",
            message: "Enter your linkedin URL: ",
            name: "LinkedIn",
        },
    
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
