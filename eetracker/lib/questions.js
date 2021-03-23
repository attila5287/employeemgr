// console.log('test external questions');
const questions = {
	action: [
		{
			type: "list",
			message: "Choose action below",
			choices: ["Add", "View", "Update", "Delete"],
			name: "action"
		}
	],
	group: [
		{
			type: "list",
			message: "Select action group below",
			choices: ["Departments", "Roles", "Employees"],
			name: "group"
		}
	],

};
  

module.exports = questions;


