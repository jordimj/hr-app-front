import * as API from '../api/api';
import * as actionTypes from '../types/types';

// FETCH DEPARTMENTS ACTIONS

const fetchDepartmentsStarted = () => {
  return {
    type: actionTypes.fetchDepartmentsStarted,
  };
};

const fetchDepartmentsSuccessed = (departments) => {
  return {
    type: actionTypes.fetchDepartmentsSuccessed,
    departments,
  };
};

const fetchDepartmentsFailed = (error) => {
  return {
    type: actionTypes.fetchDepartmentsFailed,
    error,
  };
};

export const fetchDepartments = () => {
  return async (dispatch) => {
    dispatch(fetchDepartmentsStarted());

    try {
      const departments = await API.getDepartments();
      dispatch(fetchDepartmentsSuccessed(departments));
    } catch (error) {
      dispatch(fetchDepartmentsFailed(error));
    }
  };
};

// FETCH EMPLOYEES ACTIONS

const fetchEmployeesStarted = () => {
  return {
    type: actionTypes.fetchEmployeesStarted,
  };
};

const fetchEmployeesSuccessed = (employees) => {
  return {
    type: actionTypes.fetchEmployeesSuccessed,
    employees,
  };
};

const fetchEmployeesFailed = (error) => {
  return {
    type: actionTypes.fetchEmployeesFailed,
    error,
  };
};

export const fetchEmployees = (employee) => {
  return async (dispatch) => {
    dispatch(fetchEmployeesStarted());

    try {
      const employees = await API.getEmployees(employee);
      dispatch(fetchEmployeesSuccessed(employees));
    } catch (error) {
      dispatch(fetchEmployeesFailed(error));
    }
  };
};

// CREATE EMPLOYEE ACTIONS

const createEmployeeStarted = () => {
  return {
    type: actionTypes.createEmployeeStarted,
  };
};

const createEmployeeSuccessed = (employee) => {
  return {
    type: actionTypes.createEmployeeSuccessed,
    employee,
  };
};

const createEmployeeFailed = (error) => {
  return {
    type: actionTypes.createEmployeeFailed,
    error,
  };
};

export const createEmployee = (employee) => {
  return async (dispatch) => {
    dispatch(createEmployeeStarted());

    console.log(employee);

    try {
      await API.createEmployee(employee);

      employee.department = 'Dev';
      console.log(employee);
      dispatch(createEmployeeSuccessed(employee));
    } catch (error) {
      dispatch(createEmployeeFailed(error));
    }
  };
};

// FETCH FIRST REPORT ACTIONS

const fetchFirstReportStarted = () => {
  return {
    type: actionTypes.fetchFirstReportStarted,
  };
};

const fetchFirstReportSuccessed = (report) => {
  return {
    type: actionTypes.fetchFirstReportSuccessed,
    report,
  };
};

const fetchFirstReportFailed = (error) => {
  return {
    type: actionTypes.fetchFirstReportFailed,
    error,
  };
};

export const fetchFirstReport = () => {
  return async (dispatch) => {
    dispatch(fetchFirstReportStarted());

    try {
      const report = await API.getSalaryStatsPerDepartment();
      dispatch(fetchFirstReportSuccessed(report));
    } catch (error) {
      dispatch(fetchFirstReportFailed(error));
    }
  };
};

// FETCH SECOND REPORT ACTIONS

const fetchSecondReportStarted = () => {
  return {
    type: actionTypes.fetchSecondReportStarted,
  };
};

const fetchSecondReportSuccessed = (report) => {
  return {
    type: actionTypes.fetchSecondReportSuccessed,
    report,
  };
};

const fetchSecondReportFailed = (error) => {
  return {
    type: actionTypes.fetchSecondReportFailed,
    error,
  };
};

export const fetchSecondReport = (amount) => {
  return async (dispatch) => {
    dispatch(fetchSecondReportStarted());

    try {
      const report = await API.getSalaryStatsHigherThan(amount);
      dispatch(fetchSecondReportSuccessed(report));
    } catch (error) {
      dispatch(fetchSecondReportFailed(error));
    }
  };
};
