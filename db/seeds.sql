INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Legal"),
       ("Finance"),
       ("Engineering"),
       ("Marketing");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", '65000', 1),
       ("Sales Lead", '90000', 1),
       ("Lawyer", '150000', 2),
       ("Legal Intern", '25000', 2),
       ("Accountant", '100000', 3),
       ("Account Manager", '150000', 3),
       ("Lead Engineer", '200000', 4),
       ("Software Engineer", '150000', 4),
       ("Lead Marketer", '90000', 5),
       ("Marketing Team Member", '65000', 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Nick", "Mason", 1, 1),
       ("Bob", "Ross", 1, 2),
       ("John", "Smith", 2, 1),
       ("Chris", "Tucker", 3,  3),
       ("Samantha", "Jackson", 4, 4),
       ("Sarah", "Parker", 5, 2),
       ("Jane", "Doe", 6, 2),
       ("Kim", "Smith", 7, 1),
       ("Lauren", "Thomas", 8, 5);