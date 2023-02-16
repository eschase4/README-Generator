const { renderLicenseBadge }= require("./utils/generateLicense");

const readMeGenerator = (response) => {
    const badge = renderLicenseBadge(response);
    return `# ${response.projectTitle}
    
    ${badge[0]}    

<a name="description"></a>
## Description  
    
${response.motivation}.<br>
${response.objective}.<br>
${response.whatILearned}.<br>
    
    
## Table of Contents
-[Description](#description)<br> 
-[Installation](#installation)<br>
-[Usage](#usage)<br>
-[Contribution](#contribution)<br>
-[Technologies](#technologies)<br>
-[Tests](#tests)<br>
-[Credits](#credits)<br>
-[License](#license)<br>

<a name="installation"></a>
## Installation

${response.installationOne}
${response.installationTwo}
${response.installationThree}
${response.installationFour}
${response.installationFive}

<a name="usage"></a>
## Usage

${response.usage}

<a name="contribution"></a>
## How To Contribute

${response.contributing}

<a name="technologies"></a>
## Technologies

${response.technology}

<a name="tests"></a>
## Tests

${response.tests}

<a name="credits"></a>
## Credits 

${response.credits}

<a name="license"></a>
## License

This application was made under the ${badge[1]} license.

## Questions

Github: https://github.com/${response.github}

My email address is ${response.email}, feel free to reach out for any questions you may have.`
}

module.exports = {
    readMeGenerator
}