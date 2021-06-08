
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){ return '';}
  console.log("renderLicenseBadge")
  return`
  ![${license}](https://img.shields.io/badge/license-${license}-blueviolet)(https://opensource.org/licenses/${license})
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){ return '';}
  console.log("renderLicenseLink");
  return`
  https://opensource.org/licenses/${license}

  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){ return'';}
  console.log("renderLicenseSection");  
  return`
    # Licenses
    ${license}
    `
  };
  
const generateInstall = installation => {
  if(!installation){
      
    return'';
  }
  console.log("generateInstall");
  return`
  # Installation
  ${installation}
  `
};

const generateUsage = usage => {
  if(!usage){
    return'';
  }
  console.log("generateUsage")
  return`
  # Usage
  ${usage}
  `
};


const generateContrib = contribution => {
  if(!contribution){
      return'';
  }
  console.log("generateContrib")
  return`
  # Contributing
  ${contribution}
  `
};

const generateCredits = credits => {
  if(!credits){
      return'';
  }
  console.log("generateCredits")
  return`
  # Credits
  ${credits}
  `
};

const generateTests = tests => {
  if(!tests){
      return'';
  }
  console.log("generateTests")
  return`
  # Tests
  ${tests}
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("data",data);
  let fileContent = `
  # ${data.projTitle}

  ${renderLicenseBadge(data.licenses)}
    
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
console.log(fileContent);
return fileContent;
}

module.exports = generateMarkdown;
