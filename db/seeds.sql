INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Legal"),
       ("Finance"),
       ("Engineering"),
       ("Marketing");

INSERT INTO roles (title, salary, department_id)
VALUES ("SDR", '65000', 1),
       ("Sales Supervisor", '90000', 1),
       ("Legal Council", '150000', 2),
       ("Paralegal", '25000', 2),
       ("CPA", '100000', 3),
       ("Account Manager", '150000', 3),
       ("Lead Engineer", '200000', 4),
       ("Software Engineer", '150000', 4),
       ("Lead Marketer", '90000', 5),
       ("Marketing Team Member", '65000', 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Shahid", "Hashmi", 1, 1),
       ("Nick", "Mason", 1, 2),
       ("Dimitra", "Anastasopoulos", 2, 1),
       ("Corey", "Skidmore", 3,  3),
       ("Jaromir", "Jagr", 4, 4),
       ("Paul", "Korea", 5, 2),
       ("Henrik", "Zetterberg", 6, 2),
       ("Dale", "Hawerchuck", 7, 1),
       ("Pavel", "Datsyuk", 8, 5);