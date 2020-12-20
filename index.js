const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//questions for user
const employees = []
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is this member's name?",
            name: 'name',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is this member's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            message: "Enter this member's employee ID.",
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Enter thsi member's email address",
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Enter your this member's office number",
            name: 'officeNumber',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log("Please enter an office number!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'option',
            message: 'Do you want to add another team member?',
        },
      
    ]).then((answers) => {
        const {option, name, id, email, officeNumber, role } = answers;
        employees.push(new Manager(name, id, email, officeNumber, role));
        if (option) {
            return questions();
        }
    });
};
questions().then(() => {
    writeToFile('site.html', generateHTML(employees))
});

function writeToFile(fileName, data) {
    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output')
    }
    fs.writeFileSync('./output' + fileName, data);
}; 