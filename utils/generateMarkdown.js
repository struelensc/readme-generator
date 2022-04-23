// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU General Public License (GPL) 2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU General Public License (GPL) 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return null;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "") {
    return `See the [LICENSE](LICENSE.md) file for license rights and limitations (${license}).`;
  } else {
    return null;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  const readmeSections = [
    {
      info: data.title,
      textContent: () => {
        return `# ${data.title}`;
      },
    },
    {
      header: "## Description",
      info: data.description,
      textContent: () => {
        return data.description;
      },
    },
    {
      header: "## Installation Instructions",
      info: data.install,
      textContent: () => {
        return data.install;
      },
    },
    {
      header: "## Usage Information",
      info: data.usage,
      textContent: () => {
        return data.usage;
      },
    },
    {
      header: "## Contribution Guidelines",
      info: data.contribution,
      textContent: () => {
        return data.contribution;
      },
    },
    {
      header: "## Test Instructions",
      info: data.test,
      textContent: () => {
        return data.test;
      },
    },
    {
      header: "## License",
      info: data.license,
      textContent: () => {
        return data.license;
      },
    },
    {
      header: "## Questions",
      info: { github: data.github, email: data.email },
      textContent: () => {
        if (data.github === "" && data.email === "") {
          return;
        } else if (data.github != "" && data.email === "") {
          return `You can find me on GitHub under ${data.github}.`;
        } else if (data.github === "" && data.email != "") {
          return `You can reach me via email at ${data.email}.`;
        } else {
          return `You can find me on GitHub under ${data.github} or email at ${data.email}.`;
        }
      },
    },
  ];

  const text = [];

  for (let i = 0; i < readmeSections.length; i++) {
    if (readmeSections[i].info != "") {
      text.push(readmeSections[i].header);
      text.push(readmeSections[i].textContent());
    }
  }

  console.log(text.join("\n\n"));

  return text.join("\n\n");
}

module.exports = generateMarkdown;
