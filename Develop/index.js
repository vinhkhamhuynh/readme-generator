// Packages needed 
const inquirer = require('inquirer');
const fs = require('fs');
// const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');


// What is your Project Title ? 
// Please provide a Description for your project. 
// Please provide any instructions or languages use in this project.
// Please include any screenshot for the project.
// Please include deployed GitHub link.
// Please provide GitHub repository link.
// Please choose a License for your project.


//Created an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'fullName',
            message: 'What is your name?',
        },

        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub page URL?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide a Description for your project. ',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide steps required to install your project. ',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide languages and technologies use in this project. ',
        },

        {
            type: 'input',
            name: 'screenshot',
            message: 'Please include path to your screenshot',
        },

        {
            type: 'input',
            name: 'imgTxt',
            message: 'Please provide an alternative text for your screenshot',
        },

        {
            type: 'input',
            name: 'deployedLink',
            message: 'Please include deployed GitHub link for the project.',
        },

        {
            type: 'input',
            name: 'githubLink',
            message: 'Please provide GitHub repository link for the project.',
        },

        {
            type: 'list',
            name: 'license',
            message: 'Please choose a License for your project.',
            choices: ["MIT", "Apache License", "GNU GPLv3", "GNU AGPLv3", "Mozilla Public License", "Boost Software License", "None"]
        },

    ];

//Created a function to initialize app
// const init = () => {
//     promptUser()
//         .then((answers) => {
//             try {
//                 const readme = generateReadme(answers);
//                 fs.writeFileSync('../README.md', readme);
//                 console.log('SUCCESSFULLY created README.md');
//             }
//             catch (error) {
//                 console.log(error);
//             }
//         });
// };

const init = () => {
    inquirer.prompt([...questions])
        .then((answers) => {
            try {
                
                fs.writeFileSync('../README.md', generateMarkdown(answers));
                console.log('SUCCESSFULLY created README.md');
            }
            catch (error) {
                console.log(error);
            }
        });
};

// Function call to initialize app
init();
