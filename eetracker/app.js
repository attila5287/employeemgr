console.log('\n >> ee tracker');
const mysql = require('mysql');
const inquirer = require('inquirer');
const questions = require('./lib/questions');

let connection = mysql.createConnection({
	host: "localhost",

	// Your port;
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "1234",
	database: "employees",
});

connection.connect(function (err) {
	if (err) throw err;
  console.log('connected');
  init();
});

// console.log('questions :>> ', questions);

async function init() {
  try {
    const action = await inquirer.prompt(questions.action);
    // console.log('action :>> ', action.action);

    const group = await inquirer.prompt(questions.group);
    // console.log('group.group :>> ', group.group);
    
  } catch (error) {
      console.log(error);
  }
  
}
