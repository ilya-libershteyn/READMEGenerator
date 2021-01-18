const inq = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

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
        choices: ["Apache",
                  "GNU",
                  "MIT",
                  "Perl",
                  "Zlib"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List contributors',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github user name: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: ',
    }
];

// function to call inquirer
const promptUser = () => 
{
    return inq.prompt(questions);
};

// function to write README file
function writeToFile(fileName, data) {
    writeFileAsync('./output/' + fileName + '.md', data);
};

// function to initialize program
const init = async() => 
{
  try 
  {
    const data = await promptUser();

    const md = generateMarkdown(data);

    writeToFile('./output/README.md', md);

    console.log('Successfully wrote to ' + fileName + '.md');
  } 
  catch(err) 
  {
    console.log(err);
  }
};

// function call to initialize program
init();
