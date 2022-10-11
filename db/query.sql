SELECT id AS EmpNo, first_name as First, last_name AS Last, role_id AS Role, manager_id AS Manager FROM employees
JOIN roles ON roles.id = employees.role_id;