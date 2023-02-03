// OPEN THIS FILE IN YOUR TERMINAL, AND TYPE 'node index.js' TO BEGIN
const inquirer = require('inquirer');
const { questions }  = require('./questions');
const { readMeGenerator } = require('./template');
const fs = require(`fs/promises`);
    
  
const handleResponse = (response) => {
    const readMe = readMeGenerator(response);
    fs.writeFile("./output/README.md", `${readMe}`, "utf8")
    .then(() => console.log("file created"));
}

inquirer
.prompt (questions)
.then(handleResponse); 
