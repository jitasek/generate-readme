// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown");

// Create an array of questions for user input:
// questions declared outside of the inquirerAsync function (-> readability)
const questions = [
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
    name: "Contributing",
  },
  {
    type: "input",
    message: "Enter tests instructions: ",
    name: "Tests",
  },
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "GitHub",
  },
  {
    type: "input",
    message: "Enter your email: ",
    name: "Email",
  },
  {
    type: "checkbox",
    message: "Select the license: ",
    name: "License",
    choices: ["MIT", "GPL", "BSD"],
  },
];

// set up an async function (3 steps) - prep the function to accept questions
const inquirerAsync = async (questions) => {
  // 1 step: declare the questions (moved outside the function - above)
  try {
    // 2 step: prompt the questions to get answers (once complete, it will return me the answers)
    const answers = await inquirer.prompt(questions); // anynchronous operation, so I have to await for it to finish

    // 3 step: return the answers
    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0); // exits the code
  }
};

// Create a function to write README file - function to write to a file
const writeToFile = (path, data) => {
  try {
    fs.writeFileSync(path, data);
    console.log(`Successfully written to ${path}!`);
  } catch (error) {
    console.log(`Failed to write to ${path}: ${error.message}`);
  }
};

// Create a function to initialize app - async function as it has to wait to get the answers
const startApp = async () => {
  // get answers
  const answers = await inquirerAsync(questions);
  const readmeContent = generateMarkdown(answers);
  // write to file
  writeToFile("README.md", readmeContent);
};

startApp();
