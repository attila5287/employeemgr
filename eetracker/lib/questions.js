const options = {
	view_all_ee: "View All Employees",
	view_ee_dept: "View All Employees By Department",
	view_ee_mgr: "View All Employees By Manager",
	add_ee: "Add Employee",
	rmv_ee: "Remove Employee",
	upd_ee_role: "Update Employee Role",
	upd_ee_mgr: "Update Employee Manager",
	view_all_role: "View All Roles",
	add_role: "Add Role",
	rmv_role: "Remove Role",
	view_all_dept: "View All Departments",
	add_dept: "Add Department",
	rmv_dept: "Remove Department",
	quit: "Quit"
};
;

const inquirer = require('inquirer');
const menu = Object.keys(options).map((k) => 
			({ 
				name: options[k],
				value: k,
			})
		);
// draws a line after options menu
menu.push(new inquirer.Separator);

// console.log('>> FULL MENU :>> ', menu);
const questions = {
	action: [{
		type: "list",
		message: "Choose action below",
		name: "action",
		choices: menu

	}]
};


module.exports = questions;
