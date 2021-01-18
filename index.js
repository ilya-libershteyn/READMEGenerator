// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter a table of contents:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instrucitons:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage details:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select License',
    },
    {
        type: 'list',
        name: 'contributing',
        message: 'List contributors',
    },
    {
        type: 'list',
        name: 'tests',
        message: 'Tests',
    },
    {
        type: 'list',
        name: 'questions',
        message: 'Questions',
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    const inq = require('inquirer');
    const fs = require('fs');
}

// function call to initialize program
init();
