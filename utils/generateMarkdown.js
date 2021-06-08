// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "none") {
    return '';
  }
  return `
  ![${license}](https://img.shields.io/badge/license-${license}-blueviolet)(https://opensource.org/licenses/${license})
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = "none") {
    return '';
  }
  return `https://opensource.org/licenses/${license}
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = "none") {
    return '';
  }
  return `# Licenses
  ${license}`
};

const generateInstall = installation => {
  if (!installation) {
    return '';
  }
  return `# Installation
  ${installation}
  `
};

const generateUsage = usage => {
  if (!usage) {
    return '';
  }
  return `# Usage
  ${usage}
  `
};

const generateContrib = contribution => {
  if (!contribution) {
    return '';
  }
  return `# Contributing
  ${contribution}
  `
};

const generateCredits = credits => {
  if (!credits) {
    return '';
  }
  return `# Credits
  ${credits}
  `
};

const generateTests = tests => {
  if (!tests) {
    return '';
  }
  return `# Tests
  ${tests}
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let fileContent =
    `# ${data.projTitle}
  ${renderLicenseBadge(data.licenses)}
  ## Description
  ${data.projDesc}
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licences](#licenses)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Contributing](#contributing)
    
  ${generateInstall(data.installation)}
  ${generateUsage(data.usage)}
  ${renderLicenseSection(data.licenses)}
  ${renderLicenseLink(data.licenses)}
  ${generateTests(data.tests)}
  ${generateCredits(data.credits)}
  ${generateContrib(data.contribution)}
  ## Questions
  If you have any questions, or comments, regarding this repository please use the following contact information:
  ${data.name}
  ${data.github}
  ${data.email}
`;

  return fileContent;
}

module.exports = generateMarkdown;