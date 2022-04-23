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
  if (license === "MIT License") {
    return `Copyright ${new Date().getFullYear()} ${names}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === "GNU General Public License (GPL) 2.0") {
    return `Copyright (C) ${new Date().getFullYear()} ${names}

    This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
    
    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA`;
  } else if (license === "Apache License 2.0") {
    return `Copyright ${new Date().getFullYear()} ${names}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  } else if (license === "GNU General Public License (GPL) 3.0") {
    return `Copyright (C) ${new Date().getFullYear()} ${names}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.`;
  } else {
    return;
  }
}

// Generates markdown text for README sections according to what the user fills out
function generateMarkdown(data) {
  const readmeSections = [
    {
      header: null,
      info: data.license,
      textContent: () => renderLicenseBadge(data.license),
    },
    {
      header: null,
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
        return renderLicenseLink(data, data.license);
      },
    },
    {
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
