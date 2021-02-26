// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) { var licenseBadge;
  switch(data.license) {
    case 'MIT': 
      licenseBadge = '![badge](https://img.shields.io/badge/license-MIT-orange)';
      break;
    case 'Apache License':
      licenseBadge = '![badge](https://img.shields.io/badge/license-Apache_License-orange)';
      break;
    case 'GNU GPLv3':
      licenseBadge = '![badge](https://img.shields.io/badge/license-GNU_GPLv3-orange)';
      break;
    case 'GNU AGPLv3':
      licenseBadge = '![badge](https://img.shields.io/badge/license-GNU_AGPLv3-orange)';
      break;
    case 'Mozilla Public License':
      licenseBadge = '![badge](https://img.shields.io/badge/license-Mozilla_Public_License-orange)';
      break;
    case 'Boost Software License':
      licenseBadge = '![badge](https://img.shields.io/badge/license-Boost_Software_license-orange)';
      break;
    case 'None':
      licenseBadge = '';
  }
  return licenseBadge;}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { var licenseLink;
  switch(data.license) {
    case 'MIT': 
      licenseLink = 'https://spdx.org/licenses/MIT.html';
      break;
    case 'Apache License':
      licenseLink = 'https://spdx.org/licenses/Apache-2.0.html';
      break;
    case 'GNU GPLv3':
      licenseLink = 'https://spdx.org/licenses/GPL-3.0-or-later.html';
      break;
    case 'GNU AGPLv3':
      licenseLink = 'https://spdx.org/licenses/AGPL-3.0-or-later.html';
      break;
    case 'Mozilla Public License':
      licenseLink = 'https://spdx.org/licenses/MPL-2.0.html';
      break;
    case 'Boost Software License':
      licenseLink = 'https://spdx.org/licenses/BSL-1.0.html';
      break;
      case 'none':
        licenseLink = '';
  }
  return licenseLink;}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {  
  if (data.license === 'None') {
  return`
  `;
} else {
  return `
## License
${renderLicenseBadge(data)}
 
This project is licensed under the ${data.license} license. For more information, click here: ${renderLicenseLink(data)} 
 
`;
}}

// TODO: Create a function to generate markdown for README
function license() {
  return renderLicenseSection()

;
}

module.exports = license;