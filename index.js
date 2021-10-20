const inquirer = require("inquirer");
const fs = require("fs");


const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");
const { get } = require("http");

const team = [];
let manager;


function getManagerInfo() {

    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Manager: what is your name? (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Manager: what is your employee ID? (Required)",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Manager: what is your email address? (Required)",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Manager: what is your office number? (Required)",
            validate: managerOfficeNumberInput => {
                if (managerOfficeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        team.push(manager);
        displayMenu();
    });
};

const displayMenu = () => {
    inquirer.prompt([
    {
        type: "list",
        name: "useroptions",
        message: "Choose an option to add an Engineer, add an Intern, or build your team!",
        choices: ["Add an Engineer", "Add an Intern", "Buid your team"]
    }
    ])

    .then(response => {
        switch (response.useroptions) {
            case "Add an Engineer":
                getEngineerInfo();
                break;
            case "Add an Intern":
                getInternInfo();
                break;
            case "Build my team":
                generateteam();
                break;
        }
    });
};


function getEngineerInfo() {


    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Engineer: what is your name? (Required)",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Engineer: what is your employee ID? (Required)",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Engineer: what is your email address? (Required)",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Engineer: what is your Github username? (Required)",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter your Github username!");
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        team.push(engineer);
        displayMenu();
    });
};

function getInternInfo() {

    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Intern: what is your name? (Required)",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Intern: what is your employee ID? (Required)",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Intern: what is your email address? (Required)",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Intern: what school are you attending? (Required)",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter your school!");
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        team.push(intern);
        displayMenu();
    });

};

getManagerInfo();


