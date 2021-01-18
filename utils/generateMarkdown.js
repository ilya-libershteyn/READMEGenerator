// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
## Table of Contents  
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
## Description  
${data.descrtption}  
## Installation  
${data.install}  
## Usage  
${data.usage}  
## License  
![badge](https://img.shields.io/badge/license-${data.license}-yellowgreen) This application is covered by the ${data.license} license.  
## Contributing  
${data.contributing}  
## Tests  
${data.tests}  
## Questions  
${data.questions}  
Find me on GitHub: [${data.username}](https://github.com/${data.username})  
Email me with any questions: ${data.email}  
`;
}

module.exports = generateMarkdown;
