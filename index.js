// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projTitle',
            message: 'Enter the Title of your project (Required)',
            validate: projTitleInput => {
                if (projTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projDesc',
            message: 'Enter the Description of your project (Required)',
            validate: projDescInput => {
                if (projDescInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to enter some information about installation?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            when: ({
                confirmInstall
            }) => confirmInstall
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter some information about usage?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What should be known about using the repository?',
            when: ({
                confirmUsage
            }) => confirmUsage
        },
        {
            type: 'confirm',
            name: 'confirmContrib',
            message: 'Would you like to enter some information about contributing?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What should be known about how to contribute to the repository?',
            when: ({
                confirmContrib
            }) => confirmContrib
        },
        {
            type: 'confirm',
            name: 'confirmCredit',
            message: 'Would you like to add credits?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please enter the names to be credited on this project?',
            when: ({
                confirmCredit
            }) => confirmCredit
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to add testing information?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What should be known to run tests?',
            when: ({
                confirmTest
            }) => confirmTest
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses apply to this project? (Check all that apply)',
            choices: ['Apache2.0', 'GNU_GPL_v3', 'MIT', 'ISC', 'Mozilla2.0', 'Boost', 'Unilicense']
        }

    ]);
};

questions()
    .then(readmeInfo => {
        return generatePage(readmeInfo);
        console.log(answers);
    })
    .then()
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
