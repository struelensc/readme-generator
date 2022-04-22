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
      header: ``,
      content: `# ${data.title}`,
    },
    {
      header: "## Description",
      content: data.description,
    },
    {
      header: "## Installation Instructions",
      content: data.install,
    },
    {
      header: "## Usage Information",
      content: data.usage,
    },
    {
      header: "## Contribution Guidelines",
      content: data.contribution,
    },
    {
      header: "## Test Instructions",
      content: data.test,
    },
    {
      header: "## License",
      content: data.license,
    },
  ];

  const text = [];

  for (let i = 0; i < readmeSections.length; i++) {
    if (readmeSections[i].content != "") {
      text.push(readmeSections[i].header);
      text.push(readmeSections[i].content);
    }
  }

  console.log(text.join("\n\n"));

  return;
}

module.exports = generateMarkdown;
