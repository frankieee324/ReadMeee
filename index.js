const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')



const questions = [
    
    {
        type:  'input', 
        name:  'title', 
        message: 'What is the title of your project?'
    },
    {
        type:  'input', 
        name:  'description', 
        message: 'Please give a description of your project'
    },
    {
        type:  'input', 
        name:  'contents', 
        message: 'Please give a table of contents'
    },
    {
        type:  'input', 
        name:  'data.instalation', 
        message: 'Any installations required?'
    },
    {
        type:  'input', 
        name:  'usage', 
        message: 'What is the usage for this project?'
    },
    {
        type:  'list', 
        name:  'license', 
        choices: [ "MIT" , "CC0", "IBM", "None" ]
    },
    {
        type:  'input', 
        name:  'contributing', 
        message: 'Any contributors?'
    },
    {
        type:  'input', 
        name:  'tests', 
        message: 'What tests instructions for this project?'
    },
    {
        type:  'input', 
        name:  'githubuser', 
        message: 'What is your github username?'
    },
    {
        type:  'input', 
        name:  'mail', 
        message: 'What is your e-mail?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err, result)=> {
        if (err) throw err;
        console.log('file created');
    })
}

// TODO: Create a function to initialize app
function init() {

    //start app
    inquirer.prompt(questions)
      .then(data => {
        const content = generateMarkdown.generateMarkdown(data)
        writeToFile('./testReadme.md',content)
      })
}

// Function call to initialize app
init();