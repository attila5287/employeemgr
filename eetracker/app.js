console.log('>> ee tracker');
const mysql = require('mysql');
const inquirer = require('inquirer');
const questions = require('./lib/questions');

let connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
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





  } catch (error) {
      console.log(error);
  }
  
}
