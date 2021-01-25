import * as actionTypes from '../types/types';

const initialState = {
  departments: [],
  employees: [],
  reports: {
    salaryStats: [],
    higherSalaries: [],
  },
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchDepartmentsStarted:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.fetchDepartmentsSuccessed:
      return {
        ...state,
        departments: action.departments,
        loading: false,
      };
    case actionTypes.fetchDepartmentsFailed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.fetchEmployeesStarted:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.fetchEmployeesSuccessed:
      return {
        ...state,
        employees: action.employees,
        loading: false,
      };
    case actionTypes.fetchEmployeesFailed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.createEmployeeStarted:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.createEmployeeSuccessed:
      return {
        ...state,
        employees: [...state.employees, action.employee],
        loading: false,
      };
    case actionTypes.createEmployeeFailed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.fetchFirstReportStarted:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.fetchFirstReportSuccessed:
      return {
        ...state,
        reports: { ...state.reports, salaryStats: action.report },
        loading: false,
      };
    case actionTypes.fetchFirstReportFailed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.fetchSecondReportStarted:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.fetchSecondReportSuccessed:
      return {
        ...state,
        reports: { ...state.reports, higherSalaries: action.report },
        loading: false,
      };
    case actionTypes.fetchSecondReportFailed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
