const licenseReturn = require("./stringConstants");

// Returns a badge for chosen license or returns null if no license was chosen
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

// Returns README text for LICENSE information or returns null if no license was chosen
function renderLicenseLink(data, license) {
  let fileName = data.title.replaceAll(" ", "-");

  if (license != "None") {
    return `See the [LICENSE](${fileName}-LICENSE.md) file for license rights and limitations (${license}).`;
  } else {
    return null;
  }
}

// Returns text for LICENSE file or returns null if no license was chosen
function renderLicenseText(license, names) {
  let copyright;
  let licenseText = licenseReturn(license);

  if (license === "MIT License") {
    copyright = `Copyright ${new Date().getFullYear()} ${names}`;
  } else if (license === "GNU General Public License (GPL) 2.0") {
    copyright = `Copyright (C) ${new Date().getFullYear()} ${names}`;
  } else if (license === "Apache License 2.0") {
    copyright = `Copyright ${new Date().getFullYear()} ${names}`;
  } else if (license === "GNU General Public License (GPL) 3.0") {
    copyright = `Copyright (C) ${new Date().getFullYear()} ${names}`;
  } else {
    return;
  }

  return `${copyright}\n\n${licenseText}`;
}

// Renders table of contents
function renderTOC(data) {
  let toc = [];

  for (let i = 4; i < data.length; i++) {
    if (data[i].info && data[i].info != "None") {
      toc.push(`- [${data[i].name}](#${data[i].name.toLowerCase()})`);
    }
  }

  return toc.join("\n");
}

// Generates markdown text for README sections according to what the user fills out
function generateMarkdown(data) {
  const readmeSections = [
    {
      name: "Badge",
      header: null,
      info: data.license,
      textContent: () => renderLicenseBadge(data.license),
    },
    {
      name: "Title",
      header: null,
      info: data.title,
      textContent: () => {
        return `# ${data.title}`;
      },
    },
    {
      name: "Description",
      header: "## Description",
      info: data.description,
      textContent: () => {
        return data.description;
      },
    },
    {
      name: "Table of Contents",
      header: "## Table of Contents",
      info: data,
      textContent: () => {
        let text = renderTOC(readmeSections);
        if (text) {
          return text;
        }
      },
    },
    {
      name: "Installation",
      header: "## Installation",
      info: data.install,
      textContent: () => {
        return data.install;
      },
    },
    {
      name: "Usage",
      header: "## Usage",
      info: data.usage,
      textContent: () => {
        return data.usage;
      },
    },
    {
      name: "Contribution",
      header: "## Contribution",
      info: data.contribution,
      textContent: () => {
        return data.contribution;
      },
    },
    {
      name: "Tests",
      header: "## Tests",
      info: data.test,
      textContent: () => {
        return data.test;
      },
    },
    {
      name: "License",
      header: "## License",
      info: data.license,
      textContent: () => {
        return renderLicenseLink(data, data.license);
      },
    },
    {
      name: "Questions",
      header: "## Questions",
      info: data.github || data.email,
      textContent: () => {
        if (data.github === "" && data.email === "") {
          return;
        } else if (data.github != "" && data.email === "") {
          return `Feel free to reach me on ![GitHub](${data.github}).`;
        } else if (data.github === "" && data.email != "") {
          return `You can reach me via email at ${data.email}.`;
        } else {
          return `Feel free to reach me on [GitHub](${data.github}) or email me at ${data.email}.`;
        }
      },
    },
  ];

  const text = [];

  // Loops through objects to generate README based on user submissions
  for (let i = 0; i < readmeSections.length; i++) {
    if (
      readmeSections[i].info != "" &&
      readmeSections[i].textContent() != null
    ) {
      if (readmeSections[i].header != null) {
        text.push(readmeSections[i].header);
      }
      text.push(readmeSections[i].textContent());
    }
  }

  // Returns final README text
  return text.join("\n\n");
}

module.exports = { generateMarkdown, renderLicenseText };
