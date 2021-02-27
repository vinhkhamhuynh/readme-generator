// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch(license) {
        case 'MIT': 
            return "\n\n![GitHub license](https://img.shields.io/badge/License-MIT-green)";
        
        case 'APACHE 2.0': 
            return "\n\n![GitHub license](https://img.shields.io/badge/License-APACHE2.0-blule)";

        case 'GPL 3.0': 
            return "\n\n![GitHub license](https://img.shields.io/badge/License-GPL3.0-red)";

        case 'BSD 3': 
            return "\n\n![GitHub license](https://img.shields.io/badge/License-BSD3-orange)";

        case 'None': 
            return '';

    }
};

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    switch(license) {
        case 'MIT': 
            return "[MIT](https://spdx.org/licenses/MIT.html)";
        
        case 'APACHE 2.0': 
            return "[APACHE 2.0](https://spdx.org/licenses/Apache-2.0.html)";
            
        case 'GPL 3.0': 
            return "[GPL 3.0](https://spdx.org/licenses/GPL-3.0-or-later.html)";

        case 'BSD 3': 
            return "[BSD 3](https://spdx.org/licenses/BSD-3-Clause.html)";
            
        case 'None': 
            return '';
            

    }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    return `\n\n## License \n\nThis project is licensed under the ${renderLicenseLink(license)} license.`
}

// function to generate markdown for README
function generateMarkdown (userAnswers) {
    return `
# ${userAnswers.title} ${userAnswers.license === 'None' ? "" : renderLicenseBadge(userAnswers.license)}
## Description
${userAnswers.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage) ${userAnswers.license === 'None' ? "" : " \n\n* [License](#License)"}
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
To install the required dependencies, please run the following command:
\`\`\`
${userAnswers.install} 
\`\`\`
## Usage
${userAnswers.usage} ${userAnswers.license === 'None' ? "" : renderLicenseSection(userAnswers.license)}
## Contributing
${userAnswers.contribute}
## Tests
To run tests, please run the following command:
\`\`\`
${userAnswers.test}
\`\`\`
## Questions
If you have any questions, conatact me at ${userAnswers.email}. You can find more of my work at [${userAnswers.github}](https://github.com/${userAnswers.github})
`
};


module.exports = generateMarkdown;