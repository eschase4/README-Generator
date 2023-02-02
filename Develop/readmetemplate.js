const { generateMarkdown, renderLicenseBadge }= require("./generateMarkdown");

const readMeGenerator = (response) => {
    const license = generateMarkdown(response);
    const badge = renderLicenseBadge(response);
    return `# ${response.projectTitle}
    
${badge[0]}
    
## Table of Contents
1. Description
2. Installation
3. Usage

## Descripton  

-${response.motivation}
-${response.reasoning}
-${response.objective}
-${response.whatILearned}


## Installation

${response.installationOne}
${response.installationTwo}
${response.installationThree}
${response.installationFour}
${response.installationFive}

## Usage

${response.usage}

## Credits 

${response.credits}

## How To Contribute

${response.contributing}

## License

This application was made under the ${badge[1]} license.

## Tests
${response.tests}
`
}

module.exports = {
    readMeGenerator
}