# <Employee-Tracker>

## Employee-Tracker

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p><a href="https://opensource.org/licenses/MIT">Documentation on MIT, or you can click the badge above.</a><p>

  ## Table of Contents

  - [License](#license)
  - [Description](#description)
  - [User-Story](#User-Story)
  - [Acceptance-Criteria](Acceptance-Criteria)
  - [Installation](#installation)
  - [Questions](#questions)

  ## Description

  <ul>
  <li> Using the CLI, this application helps managers view and update their company's database of employees.  </li>
  </ul>

  ## User-Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

  ## Acceptance-Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
  
  ## Installation
  This project does have a few dependencies. First we must already have node.js installed to our terminal of choice. Then we will install inquirer, mysql2, dotenv, and console.table. All of these can be installed by pulling down this repository, and simply issuing a CLI command of: npm i.

  ## Questions

  For additional information on my developments and projects, please see my GitHub profile at:
  <p><a href="https://www.github.com/ShahidHashmi1">ShahidHashmi1's Profile</a></p>
  