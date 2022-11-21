
const finalProduct = (team) => {
    console.log(team);
    const webpage = [];

    const createManager = manager => {
        console.log(manager);
        let managerSection =
            `<div class='card border' style='background-image: linear-gradient(to right, rgb(10, 10, 12) 25%, rgb(83, 86, 86) 75%)'>
                <h3 style = 'color: aliceblue' class="col">Manager</h3>
                <li style = 'color: aliceblue' class='ml-2'>${manager.name}</li>
                <li style = 'color: aliceblue' class='ml-2'>Emp ID: ${manager.id}</li>
                <li style = 'color: aliceblue' class='ml-2'>Email Address: <a href='mailto:${manager.email}'>${manager.email}</a></li>
                <li style = 'color: aliceblue' class='ml-2'>Office Number: ${manager.office}</li>
                </div>
        `;
        webpage.push(managerSection);
    }

    const createEngineer = engineer => {
        console.log(engineer);
        let engineerSection =
            `<div class='card border' style='background-image: linear-gradient(to right, rgb(48, 6, 6) 25%, rgb(88, 22, 22) 75%)'>
                <h3 style = 'color: aliceblue' class="col">Engineer</h3>
                <li style = 'color: aliceblue' class='ml-2'>${engineer.name}</li>
                <li style = 'color: aliceblue' class='ml-2'>Emp ID: ${engineer.id}</li>
                <li style = 'color: aliceblue' class='ml-2'>Email Address: <a href='mailto:${engineer.email}'>${engineer.email}</a></li>
                <li style = 'color: aliceblue' class='ml-2'>GitHub Link: <a target='_blank' href='https://github.com/${engineer.GitHub}'>${engineer.GitHub}</a></li>
                </div>
        `;
        webpage.push(engineerSection);
    }

    const createIntern = intern => {
        console.log(intern);
        let internSection =
            `<div class='card border' style='background-image: linear-gradient(to right, rgb(2, 30, 6) 25%, rgb(12, 65, 20) 75%)'>
                <h3 style = 'color: aliceblue' class="col">Intern</h3>
                <li style = 'color: aliceblue' class='ml-2'>${intern.name}</li>
                <li style = 'color: aliceblue' class='ml-2'>Emp ID: ${intern.id}</li>
                <li style = 'color: aliceblue' class='ml-2'>Email Address: <a href='mailto:${intern.email}'>${intern.email}</a></li>
                <li style = 'color: aliceblue' class='ml-2'>School Attended: ${intern.school}</li>
                </div>
        `;
        webpage.push(internSection);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            createManager(team[i]);
        }
        else if (team[i].getRole() === 'Engineer') {
            createEngineer(team[i]);
        }
        else {
            createIntern(team[i]);
        }
    }
return webpage.join('');
}



module.exports = team => {
    
  
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>The Dream Team</title>
</head>
<body>
    <header id="jumbotron" class="jumbotron text-white text-center" style='background-image: linear-gradient(to right, rgb(15, 2, 253) 25%, rgb(0, 213, 255) 50%, rgb(15, 2, 253) 100%)'>
        <h1 class="display-3.5">The Dream Team</h1>
    </header>
    
    
   
    <section class='container-fluid'>
    <div class ='row row-cols-5'> 
    ${finalProduct(team)}
    </div>
    </section>
    
</body>
</html>`
}




