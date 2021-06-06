const generateInstall = installText => {
  if(!installText){
      return'';
  }
  return`
  # Installation
  ${installation}
  `
};

const generateUsage = usageText => {
  if(!usageText){
      return'';
  }
  return`
  # Usage
  ${usage}
  `
};

const generateLicense = licenseText => {
  if(!licenseText){
      return'';
  }
  return`
  # Licenses
  ${licenses}
  `
};

const generateContrib = contribText => {
  if(!contribText){
      return'';
  }
  return`
  # Contributing
  ${contribution}
  `
};

const generateCredits = creditsText => {
  if(!creditsText){
      return'';
  }
  return`
  # Credits
  ${credits}
  `
};

const generateTests = testsText => {
  if(!testsText){
      return'';
  }
  return`
  # Tests
  ${tests}
  `
};
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
  return `# ${data.projTitle}

  ![{data.licenses.join('_')}](https://img.shields.io/badge/license-{data.licenses.join('%20')}-blueviolet)
    
  ## Description
  ${data.projDesc}
    
  *[Installation]#installation
  *[Usage]#usage
  *[Licences]#licenses
  *[Tests]#tests
  *[Credits]#credits
  *[Contributing]#contributing
    
  ${generateInstall(data.installation)}
  ${generateUsage(data.usage)}
  {generateLicense(data.licenses)}
  ${generateTests(data.tests)}
  ${generateCredits(data.credits)}
  ${generateContrib(data.contribution)}

  ## Questions
  If you have any questions, or comments, regarding this repository please use the following contact information:
  ${data.name}
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
