const fs = require("fs");
const inquirer = require("inquirer");
const {
  generateMarkdown,
  renderLicenseText,
} = require("./utils/generateMarkdown");

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
      "None",
      "MIT License",
      "GNU General Public License (GPL) 2.0",
      "Apache License 2.0",
      "GNU General Public License (GPL) 3.0",
    ],
  },
  {
    type: "input",
    name: "fullName",
    message: "Full Name(s) for License:",
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
    message: "GitHub Profile URL:",
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
  },
];

// Writes README and LICENSE files
function writeToFile(data) {
  const fileName = data.title.replaceAll(" ", "-");
  const readmeText = generateMarkdown(data);
  const licenseText = renderLicenseText(data.license, data.fullName);

  fs.writeFile(`./generated-files/${fileName}-README.md`, readmeText, (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );

  if (licenseText != null) {
    fs.writeFile(
      `./generated-files/${fileName}-LICENSE.md`,
      licenseText,
      (err) =>
        err ? console.log(err) : console.log("Successfully created LICENSE!")
    );
  }
}

// Initializes app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(data);
  });
}

// Function call to initialize app
init();
