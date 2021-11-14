// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input::
//sections entitled , , Usage, License, Contributing, Tests, and Questions
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter project title: ",
      name: "Title",
    },
    {
      type: "input",
      message: "Enter project description: ",
      name: "Description",
    },

    {
      type: "input",
      message: "Enter installation instructions: ",
      name: "Installation",
    },
    {
      type: "input",
      message: "Enter usage info: ",
      name: "Usage",
    },
    {
      type: "input",
      message: "Enter contribution guidelines: ",
      name: "Contributors",
    },
    {
      type: "input",
      message: "Enter tests instructions: ",
      name: "Tests",
    },
    {
      type: "input",
      message: "Enter your GitHub URL: ",
      message: "Enter your email: ",
      name: "Questions",
    },
    // {
    //   type: "checkbox",
    //   message: "Select the license: ",
    //   name: "License",
    //   choices: ["MIT", "GPL", "BSD"],
    // },
  ])
  .then(function (answers) {
    console.log("Answers: ", answers.Title, answers.Description);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
