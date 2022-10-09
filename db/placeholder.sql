INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES 
('Shahid', 'Hashmi', 1, 1),
('Christian', 'Pearson', 1, 1),
('Nick', 'Mason', 2, 1),
('Dimitra', 'Anastasopoulos', 2, 1),
('Corey', 'Skidmore', 2, 1),
('Mike', 'Kotte', 3, 1),
('Eric', 'Weiss', 3, 1),
('Mark', 'Cuban', 4, 1),
('Asra', 'Chimes', 5, 1),
('Nick', 'Santini', 5, 1),
('Diana', 'Bruce', 5, 1),
('Ian', 'Dollenmeyer', 5, 1),
('Corey', 'Trockey', 6, 1),
('Aleem', 'Ashraf', 6, 1);

INSERT INTO departments (department_name)
VALUES ('Sales'), ('Engineering'), ('Operations'), ('Finance'), ('Legal'), ('Accounting');

INSERT INTO roles (title, salary, department_id)
VALUES 
('SDR', '75000', 1), 
('Engineer', '145000', 2), 
('Dev Ops', '100000', 3), 
('Operations processor', '100000', 3), 
('Capital Markets representative', '210000', 4), 
('Financial Planner', '165000', 4),
('Compliance Officer', '125000', 5),
('Legal Assistant', '75000', 5),
('Paralegal', '110000', 5),
('Accounts Payable', '60000', 6),
('Accounts Receivable', '60000', 6);

