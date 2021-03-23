# ![alt text](https://raw.githubusercontent.com/attila5287/img_readme/main/all/ee.png  "node-js-png") Employee Tracker
> *Another terminal app **(CLI: Command Line Interface)**  with no front end thus couldn't be deployed*


| ![alt text](https://raw.githubusercontent.com/attila5287/img_readme/main/all/js.png  "node-js-png") | Package/Func | 
| ------------- |-------------:|
| [MySQL](https://www.npmjs.com/package/mysql) | to connect to your MySQL database and perform queries.
| [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) | to interact with the user via the command-line.
| [console.table](https://www.npmjs.com/package/console.table) | to print MySQL rows to the console. Not the built-in version but the package which formats the data a little better for our purposes.


# SQL Tables:

> 1
> ---
| **Department** |data type|
|---|---|
  **id** | INT PRIMARY KEY
  **name** | VARCHAR(30) to hold department name
|---|---|

> 2
> ---
| **Role**|data type|
|---|---|
|**id** | INT PRIMARY KEY
|**title** |  VARCHAR(30) to hold role title
|**salary** |  DECIMAL to hold role salary
|**department_id** |  INT to hold reference to department role belongs to

> 3
> ---
 **Employee**|data type|
|---|---|
| **id** | INT PRIMARY KEY|
| **first_name** | VARCHAR(30) to hold employee first name|
| **last_name** | VARCHAR(30) to hold employee last name|
| **role_id** | INT to hold reference to role employee has|
| **manager_id** | INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
***

| ![alt text]( https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg "dev-icon") | About Developer | 
| -------------   | -------------: |
| Repos | [github.com/attila5287 ](https://github.com/attila5287/) |
| Profile | [ attila5287.github.io ](https:///attila5287.github.io/) |
| Email    |  atiturkoz@hotmail.com | 
---
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 



![Employee Tracker](Assets/employee-tracker.gif)

# Unit 12 MySQL Homework: Employee Tracker

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

![Database Schema](Assets/schema.png)
 
|**PRE**|---|
|---|---|
|![chk][1]| Simplify readme|

|**BASIC**|---|
|---|---|
|![chk][0]| Add departments, roles, employees|
|![chk][0]| View departments, roles, employees|
|![chk][0]| Update employee roles|


|**BONUS** |---|
|--- |---|
|![chk][0]| Update employee managers|
|![chk][0]| View employees by manager|
|![chk][0]| Delete departments, roles, and employees|
|![chk][0]| View the total utilized budget of a department|


[0]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/checkbox0.png
[1]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/checkbox1.png


```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```


* You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

* You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

> Hints

* You may wish to include a `seed.sql` file to pre-populate your database. This will make development of individual features much easier.


* Check out [SQL Bolt](https://sqlbolt.com/) for some extra MySQL help.


