// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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

  return;
}

module.exports = generateMarkdown;
