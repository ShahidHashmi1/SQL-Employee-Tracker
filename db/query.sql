-- test query for viewAllEmployees

SELECT employees.id AS EmpNo, employees.first_name as First, employees.last_name AS Last, employees.role_id AS RoleID, roles.title AS Role, employees.manager_id AS Manager, roles.salary as Salary FROM employees
JOIN roles ON roles.id = employees.role_id;