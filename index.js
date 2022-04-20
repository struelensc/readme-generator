const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Question strings
const questions = [
  "Project title: ",
  "Description: ",
  "Installation instructions: ",
  "Usage information: ",
  "License choice: ",
  "Contribution guidelines: ",
  "Test instructions: ",
  "GitHub username: ",
  "Email address: ",
];

// Prompts for inquirer
const prompts = [
  {
    type: "input",
    name: "title",
    message: questions[0],
  },
  {
    type: "input",
    name: "description",
    message: questions[1],
  },
  {
    type: "input",
    name: "install",
    message: questions[2],
  },
  {
    type: "input",
    name: "usage",
    message: questions[3],
  },
  {
    type: "list",
    name: "license",
    message: questions[4],
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
    message: questions[5],
  },
  {
    type: "input",
    name: "test",
    message: questions[6],
  },
  {
    type: "input",
    name: "github",
    message: questions[7],
  },
  {
    type: "input",
    name: "email",
    message: questions[8],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(prompts).then((data) => {
    console.log(data);
  });
}

// Function call to initialize app
init();
