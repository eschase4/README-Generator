const inquirer = require('inquirer');
const { questions }  = require('./questions');
const { readMeGenerator } = require('./readme-template');
const fs = require(`fs/promises`);
    
  
const handleResponse = (response) => {
    console.log(response);
    const readMe = readMeGenerator(response);
    fs.writeFile("README.md", `${readMe}`, "utf8")
    .then(() => console.log("file created"));
}

inquirer
.prompt (questions)
.then(handleResponse); 
