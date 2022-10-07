const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "company_db",
  password: "",
});
db.connect((err) => {
  err ? console.error(err) : console.log("success");
  starterPrompt();
});

const starterPrompt = () => {
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
      }
    });
};

const viewAllEmployees = () => {
  db.query("SELECT * FROM employees;", (err, res) => {
    if (err) throw err;
    console.table(res);
    starterPrompt();
  });
};

const viewAllRoles = () => {
  db.query("SELECT * FROM roles;", (err, res) => {
    if (err) throw err;
    console.table(res);
    starterPrompt();
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
  inquirer
    .propmt([
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
    .then();
  db.query(`INSERT INTO employees ${res}`, (err, res) => {});
  // maybe not a template literal here.....
};

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
