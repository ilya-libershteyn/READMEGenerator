// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
## Table of Contents  
${data.contents}  
## Description  
${data.descrtption}  
## Installation  
${data.install}  
## Usage  
${data.usage}  
## License  
${data.license}  
## Contributing  
${data.contributing}  
## Tests  
${data.tests}  
## Questions  
${data.name}

`;
}

module.exports = generateMarkdown;
