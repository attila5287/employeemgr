use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO 'employees'.'employee'
    ( first_name, last_name, manager_id, role_id )
VALUES
    ('John', 'Doe', 1, 17),
    ('Mike', 'Chan', 2, 18),
    ('Ashley', 'Rodriguez', 3, 19),
    ('Kevin', 'Tupik', 4, 20),
    ('Kunal', 'Singh', 5, 21),
    ('Malia', 'Brown', 6, 22),
    ('Sarah', 'Lourd', 7, 23),
    ('Tom', 'Allen', 8, 24);
