// Packages needed 
const inquirer = require('inquirer');
const fs = require('fs');

//Created an array of questions for user input
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'fullName',
            message: 'What is your name ?',
        },

        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub username ?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address ?',
        },

    ]);

//Created a function to write README file
const generateReadme = (answers) =>
    `# testing ${answers.fullName}\n## ${answers.GitHub}\n### ${answers.email}`;

//Created a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => {
            try {
                const readme = generateReadme(answers);
                fs.writeFileSync('../README.md', readme);
                console.log('SUCCESSFULLY created README.md');
            }
            catch (error) { 
                console.log(error); 
            }
        });
};

// Function call to initialize app
init();
