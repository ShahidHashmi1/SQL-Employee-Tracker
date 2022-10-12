const mysql = require("mysql2");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require('./db/connection');

db.connect((err) => {
  err ? console.error(err) : console.log("Successfully started server.");
  init();
});

const init = () => {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
  menuNav();
};


const starterPrompt = [
  {
  type: "list",
  message: "What would you like to do?",
  name: "choices",
  choices: [
    "View all employees",
    "Add employee",
    "Update employee role",
    "View all roles",
    "Add role",
    "View all departments",
    "Add department",
    "Quit"
  ]
}
];

const menuNav = async () => {
  inquirer.prompt(starterPrompt)
  .then((response) => {
    const firstResponse = response.choices;
    switch (firstResponse) {
      case "View all employees":
        viewAllEmployees();
        break;

      case "View all roles":
        viewAllRoles();
        break;

      case "View all departments":
        viewAllDepartments();
        break;

      case "Add employee":
        addEmployee();
        break;

      case "Update employee role":
        updateEmployeeRole();
        break;

      case "Add role":
        addRole();
        break;

      case "Add department":
        addDepartment();
        break;

      case "Quit":
        quit();
        break;
    }
  });
}

const viewAllEmployees = async () => {
  db.query('SELECT employees.id AS EmpNo, employees.first_name as First, employees.last_name AS Last, employees.role_id AS RoleID, roles.title AS Role, employees.manager_id AS Manager, roles.salary as Salary FROM employees JOIN roles ON roles.id = employees.role_id;', (err, res) => {
    if (err) throw err;
    console.log('\n');
    console.table(res);
  })
  await menuNav();
}

const viewAllRoles = async () => {
  db.query("SELECT * FROM roles;", (err, res) => {
    if (err) throw err;
    console.log('\n');
    console.table(res);
  })
  await menuNav();
}

const viewAllDepartments = async (departments) => {
  db.query("SELECT * FROM departments;", (err, res) => {
    if (err) throw err;
    console.log('\n');
    console.table(res);
  })
  await menuNav(departments);
}

const addEmployee = () => {
  inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the employee's first name.",
      name: "first_name",
    },
    {
      type: "input",
      message: "Enter the employee's last name.",
      name: "last_name",
    },
    {
      type: "input",
      message: "Enter the employee's role ID number.",
      name: "role_id",
    },
    {
      type: "input",
      message: "Enter the manager ID number.",
      name: "manager_id",
    }
  ]).then((answers) => {
      db.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('${answers.first_name}', '${answers.last_name}', ${answers.role_id}, ${answers.manager_id});`, (err, res) => {
        (err) ? console.error(err) : console.log('Employee successfully added.') ;
        console.log('\n');
        console.table(res);
      });
    })
    .then(menuNav());
}

const addDepartment = () => {
  inquirer
  .prompt([
    {
      type: "input",
      message: 'What is the name of the department you would like to create?',
      name: 'department_name'
    }
  ]).then((answer) => {
    db.query(`INSERT INTO departments(department_name) VALUES('${answer.department_name}');`, (err, res) => {
      (err) ? console.error(err) : console.log('Department added successfully.');
      console.log('\n');
      console.table(res);
  })
})
.then(menuNav());
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role would you like to create?",
        name: "role_title"
      },
      {
        type: "input",
        message: "What is this role's salary?",
        name: "salary"
      },
      {
        type: "input",
        message: "What is this role's department ID?",
        name: "department_id"
      }
    ]).then((response) => {
      db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${response.role_title}', ${response.salary}, ${response.department_id});`, (err, res) => {
        (err) ? console.error(err) : console.log('Role added successfully.');
        console.log('\n');
        console.table(res);
      })
    })
    .then(menuNav());
}

const updateEmployeeRole = async () => {
  inquirer
  .prompt([
    {
      name: "role_id", 
      message: "What is the updated role id?",
      type: "input"
    },
    {
      name: "id",
      message: "What is the current employee's id number?",
      type: "input"
    }
  ]).then((response) => {
    db.query(`UPDATE employees SET role_id = ${response.role_id} WHERE id = ${response.id}`, (err, res) => {
    (err) ? console.error(err) : console.log('Employee role updated successfully.');
    console.log('\n');
    console.table(res);
})
})
.then(menuNav());
};

function quit() {
  console.log("Goodbye!");
  process.exit();
}
