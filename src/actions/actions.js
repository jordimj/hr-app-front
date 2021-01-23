import * as API from '../api/api';
import * as actionTypes from '../types/types';

const fetchDepartamentsStarted = () => {
  return {
    type: actionTypes.fetchDepartamentsStarted,
  };
};

const fetchDepartamentsSuccessed = (departaments) => {
  return {
    type: actionTypes.fetchDepartamentsSuccessed,
    departaments,
  };
};

const fetchDepartamentsFailed = (error) => {
  return {
    type: actionTypes.fetchDepartamentsFailed,
    error,
  };
};

export const fetchDepartaments = () => {
  return async (dispatch) => {
    dispatch(fetchDepartamentsStarted());

    try {
      const departaments = await API.getDepartaments();
      dispatch(fetchDepartamentsSuccessed(departaments));
    } catch (error) {
      dispatch(fetchDepartamentsFailed(error));
    }
  };
};
