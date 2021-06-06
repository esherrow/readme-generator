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

module.exports = readmeInfo =>{
const {name, github, email, ...project} = readmeInfo
// Title, Badges and Description

    return `
    # ${project.projTitle}

    ![{project.licenses.join('_')}](https://img.shields.io/badge/license-{licenses.join('%20')}-blueviolet)
    
    ## Description
    ${project.projDesc}
    
    *[Installation]#installation
    *[Usage]#usage
    *[Licences]#licenses
    *[Tests]#tests
    *[Credits]#credits
    *[Contributing]#contributing
    
    ${generateInstall(project.installation)}
    ${generateUsage(project.usage)}
    {generateLicense(project.licenses)}
    ${generateTests(project.tests)}
    ${generateCredits(project.credits)}
    ${generateContrib(project.contribution)}

    ## Questions
    If you have any questions, or comments, regarding this repository please use the following contact information:
    ${name}
    ${github}
    ${email}`
};