SELECT departments.department_name, employees.role_id
FROM departments 
JOIN roles ON departments.id = roles.department_id
JOIN employees ON roles.id = employees.role_id;