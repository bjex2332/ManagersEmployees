const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./manager.js');
const engineer = require('./engineer.js');
const intern = require('./intern.js');
const finalProduct = require('./createIndex/createIndex.js')
const team = [];

const managerInfo = () => {  
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the team manager?',
            name: 'manager',
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'managerOffice',
        },
    ]).then(answers => {
        console.log(answers);
        const managerFinal = new manager(answers.manager, answers.managerID, answers.managerEmail, answers.managerOffice);
        team.push(managerFinal);
        mainMenu();
    })
}
managerInfo();
const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an engineer or intern to your team? Or are you done building your team?',
            name: 'sub',
            choices: ['Engineer', 'Intern', 'Finish'],
        }

    ]).then(choice => {
        console.log(choice);
        if (choice.sub === 'Engineer') {
            engQuestions();
        }
        
        else if (choice.sub === 'Intern') {
            intQuestions();
        } 
        
        else {
            finalize(team);
        }
    })

}




const engQuestions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: `What is the name of the engineer?`,
            name: 'engName',
        },
        {
            type: 'input',
            message: `What is the engineer's employee ID?`,
            name: 'engID',
        },
        {
            type: 'input',
            message: `What is the engineer's email address?`,
            name: 'engEmail',
        },
        {
            type: 'input',
            message: `What is the engineer's GitHub username?`,
            name: 'engGitHub',
        },
    ]).then(engAnswers => {
        console.log(engAnswers);
        const newEngineer = new engineer(engAnswers.engName, engAnswers.engID, engAnswers.engEmail, engAnswers.engGitHub);
        team.push(newEngineer);
        mainMenu();
    })
};

const intQuestions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: `What is the name of the intern?`,
            name: 'intName',
        },
        {
            type: 'input',
            message: `What is the intern's employee ID?`,
            name: 'intID',
        },
        {
            type: 'input',
            message: `What is the intern's email address?`,
            name: 'intEmail',
        },
        {
            type: 'input',
            message: `Where did the intern go to school?`,
            name: 'intSchool',
        },
    ]).then(intAnswers => {
        console.log(intAnswers);
        const newIntern = new intern(intAnswers.intName, intAnswers.intID, intAnswers.intEmail, intAnswers.intSchool);
        team.push(newIntern);
        mainMenu();
    })

};


    function finalize(team) {
        fs.writeFileSync('index.html', finalProduct(team), 'utf-8')
    }       
    

  
    