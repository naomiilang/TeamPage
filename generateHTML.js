const Manager = require("./lib/Manager");

function generateHTML (data) {
    console.log(data);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="w-auto p-3 text-center fs-1 fw-bold" style="background-color: #B9E5D0; color: whitesmoke">My Team
        </header>
        <div class="container">
            <div class="row"> ${data.filter((employee)=>employee.getRole()=== 'Manager').map((employee)=>{
                return `<div class="col-sm">
                    </br>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employee.getName()}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                            <p class="card-text">
                                Employee ID: ${employee.getId()} </br>
                                Office Number: ${employee.getOfficeNumber()}
                            </p>
                            <a href="mailto:${employee.getEmail()}" class="card-link">Email</a>
                        </div>
                    </div>
                </div>`
            }).join('\n')}
            ${data.filter((employee)=>employee.getRole()=== 'Intern').map((employee)=>{
                return `<div class="col-sm">
                    </br>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employee.getName()}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                            <p class="card-text">
                                Employee ID: ${employee.getId()} </br>
                                School: ${employee.getSchool()}
                            </p>
                            <a href="mailto:${employee.getEmail()}" class="card-link">Email</a>
                        </div>
                    </div>
                </div>`
            }).join('\n')}
            ${data.filter((employee)=>employee.getRole()=== 'Engineer').map((employee)=>{
                return `<div class="col-sm">
                    </br>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employee.getName()}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                            <p class="card-text">
                                Employee ID: ${employee.getId()} </br>
                                Github: ${employee.getGitHub()}
                            </p>
                            <a href="mailto:${employee.getEmail()}" class="card-link">Email</a>
                        </div>
                    </div>
                </div>`
            }).join('\n')}
            </div>
        </div>
    
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"></script>
    
    </html>`
}

module.exports = generateHTML