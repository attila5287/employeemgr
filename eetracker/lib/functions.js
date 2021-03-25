const functions = {
  "view_all_ee": viewEmployees(),
  "view_ee_dept": viewEmployeesByDepartment(),
  "view_ee_mgr": viewEmployeesByManager(),
  "add_ee": addEmployee(),
  "rmv_ee": removeEmployee(),
  "upd_ee_role": updateEmployeeRole(),
  "upd_ee_mgr": updateEmployeeManager(),
  "view_all_role": viewRoles(),
  "add_role": addRole(),
  "rmv_role": removeRole(),
  "view_all_dept": viewDepartments(),
  "add_dept": addDepartment(),
  "rmv_dept": removeDepartment(),
  "quit": quit(),
}
;


module.exports = functions
;
