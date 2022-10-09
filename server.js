const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const logo = require("asciiart-logo");

// const viewTables = [];
// ^^^^ possibly push all responses to this array above

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "company_db",
  password: "",
});
db.connect((err) => {
  err ? console.error(err) : console.log("Successfully started server.");
  starterPrompt();
});

const starterPrompt = () => {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);
  inquirer
    .prompt([
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
        ],
      },
    ])
    .then((response) => {
      const firstAnswer = response.choices;
      switch (firstAnswer) {
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
};

const viewAllEmployees = async () => {
  db.query("SELECT * FROM employees;", (err, res) => {
    if (err) throw err;
    console.table(res);
  })
  await starterPrompt();
};

const viewAllRoles = () => {
  db.query("SELECT * FROM roles;", (err, res) => {
    if (err) throw err;
    console.table(res);
    // starterPrompt();
  });
};

const viewAllDepartments = () => {
  db.query("SELECT * FROM departments;", (err, res) => {
    if (err) throw err;
    console.table(res);
    starterPrompt();
  });
};

const addEmployee = () => {
  inquirer.prompt([
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
      },
    ])
    .then((answers) => {
      db.query(`INSERT INTO employees VALUES ('${answers.first_name}', '${answers.last_name}', ${answers.role_id}, ${answers.manager_id});`, (err, res) => {
        (err) ? console.error(err) : console.log('Employee successfully added.') ;
        console.table(res);
      });
      starterPrompt();
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: 'What is the name of the department you would like to create?',
        name: 'department_name'
      }
    ]).then(response);
    db.query(`INSERT into departments VALUES ('${response.department_name}');`, (err, res) => {
      (err) ? console.error(err) : console.log('Department added successfully.');
    })
}

const addRole = async () => {
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
    ]).then(response);
    db.query(`INSERT INTO roles VALUES ('${response.role_title}', ${response.salary}, ${response.department_id});`, (err, res) => {
      (err) ? console.error(err) : console.log('Role added successfully.');
      console.table(res);
    })
    await starterPrompt();
}

const updateEmployeeRole = async () => {
  inquirer.prompt([
    {
      type: "input",
      message: "update employee role",
      name: "updateEmployeeRole",
    },
  ]);
  await db.query("UPDATE employees WHERE role_id IS _;");
  // figure out how to update employee role with mysql command
  starterPrompt();
};


function quit() {
  console.log("Goodbye!");
  process.exit();
}
