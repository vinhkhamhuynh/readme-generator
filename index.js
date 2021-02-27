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
            validate: function validateFullName(fullName) {
                return fullName !== '';}
        },

        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub username?',
            validate: function validateGitHub(GitHub) {
                return GitHub !== ''; }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function validateEmail(email) {
                return email !== '';}
        },

        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title?',
            validate: function validateTitle(title) {
                return title !== '';
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide a Description for your project. ',
            validate: function validateDescription(description) {
                return description !== '';}
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide steps required to install your project. ',
            validate: function validateInstallation(installation) {
                return installation !== '';}
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide languages and technologies use in this project. ',
            validate: function validateUsage(usage) {
                return usage !== '';}
        },

        {
            type: 'input',
            name: 'screenshot',
            message: 'Please include path to your screenshot',
            validate: function validateScreenshot(screenshot) {
                return screenshot !== '';}
        },

        {
            type: 'input',
            name: 'imgTxt',
            message: 'Please provide an alternative text for your screenshot',
            validate: function validateImgTxt(imgTxt) {
                return imgTxt !== '';}
        },

        {
            type: 'input',
            name: 'deployedLink',
            message: 'Please include deployed GitHub link for the project.',
            validate: function validateDeployedLink(deployedLink) {
                return deployedLink !== '';}
        },

        {
            type: 'input',
            name: 'githubLink',
            message: 'Please provide GitHub repository link for the project.',
            validate: function validateGitHubLink(githubLink) {
                return githubLink !== '';}
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
                
                fs.writeFileSync('./output/README.md', generateMarkdown(answers));
                console.log('SUCCESSFULLY created README.md');
            }
            catch (error) {
                console.log(error);
            }
        });
};

// Function call to initialize app
init();
