const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Question prompts
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Description:",
  },
  {
    type: "input",
    name: "install",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "License choice:",
    choices: [
      "MIT License",
      "GNU General Public License (GPL) 2.0",
      "Apache License 2.0",
      "GNU General Public License (GPL) 3.0",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeText = generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(data.title, data);
  });
}

// Function call to initialize app
init();
