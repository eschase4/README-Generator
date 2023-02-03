const questions = [
    {
        message: "Hello, welcome to my README generator. Press Enter to continue.",
        name: "begin"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },{
        type: "input",
        message: "What is your email adress?",
        name: "email"
    },{
        type: "input",
        message: "What is your project title?",
        name: "projectTitle"
    },{
        type: "input",
        message: "What was your motivation in making this application?",
        name: "motivation"
    },{
        type: "input",
        message: "What problems does this application solve?",
        name: "objective"
    },{
        type: "input",  
        message: "What did you learn while making this application?",
        name: "whatILearned"
    },{
        type: `input`,
        message: `What is the first step users must take to install (press enter 5 times to skip)`,
        name: "installationOne"
    },{
        type: "input",
        message: `Second step: (press enter 4 times to skip)`,
        name: "installationTwo"
    },{
        type: "input",
        message: `Third step: (press enter 3 times to skip)`,
        name: "installationThree"
    },{
        type: "input",
        message: `Fourth step: (press enter 2 times to skip)`,
        name: "installationFour"
    },{
        type: "input",
        message: `Fifth step (add any additional steps manually): (press enter to skip)`,
        name: "installationFive"
    },{
        type: "input",
        message: `Please provide instructions on how to use this application. Provide examples if possible.`,
        name: "usage"
    },{
        type: "input",
        message: `What technologies does this application use.`,
        name: "technology"
    },{
        type: "input",
        message: `If possible, please describe how users can contribute to this project.`,
        name: "contributing"
    },{
        type: "input",
        message: `If applicable, please explain how users can run tests on your application.`,
        name: "tests"
    },{
        type: "list",
        choices: ["None","Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "Open Data Commons", "Perl", "SIL", "Unlicense", "WTFPL", "Zlib" ],
        message: ["Which License are you using for this project?"],
        name: "license"
    },{
        type: "input",
        message: `Lastly, please list the other developers who also worked on this application.`,
        name: "credits"
    },{
        message: `Complete! Hit Enter one more time, and make sure to check your README.md doc for formatting issues and typos!`,
        name: `final`
    }
];

module.exports = {
    questions
}