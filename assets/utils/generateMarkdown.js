// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license[0] === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license[0] === "GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license[0] === "BSD") {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license[0]) {
    // return `https://api.github.com/licenses/mit`;
    return `This program is published under the ${license} license.`;
  } else if (!license[0]) {
    return `There is no license for this program.`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const {
    Title,
    License,
    Description,
    Installation,
    Usage,
    Contributing,
    Tests,
    Email,
    GitHub,
  } = answers;
  return `# ${Title}
  ${renderLicenseBadge(License)}
  
  ## Description 
    ${Description}

  ## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

  ## Installation 
    ${Installation}

  ## Usage 
    ${Usage}

  ## Contributing 
    ${Contributing}

  ## Tests 
    ${Tests}

  ## Questions 
    Should you have any questions, please email me at ${Email}. 
    To see more of my work, click [here](https://github.com/${GitHub}).

  ## License 
    ${renderLicenseLink(License)}`;
}
//generateMarkdown(data);

module.exports = generateMarkdown;
