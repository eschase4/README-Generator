const { renderLicenseBadge }= require("./utils/generateLicense");

const readMeGenerator = (response) => {
    const badge = renderLicenseBadge(response);
    return `# ${response.projectTitle}
    
${badge[0]}
    
## Table of Contents
1. Description
2. Installation
3. Usage
4. Contribution
5. Technologies
6. Tests
7. Credits
8. License

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

## How To Contribute

${response.contributing}

## Technologies

${response.technology}

## Tests

${response.tests}

## Credits 

${response.credits}

## License

This application was made under the ${badge[1]} license.`
}

module.exports = {
    readMeGenerator
}