// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
## Description  
${data.descrtption}  
## Table of Contents  
${data.contents}  
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
