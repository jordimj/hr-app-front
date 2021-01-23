import * as actionTypes from '../types/types';

const initialState = {
  departaments: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchDepartamentsStarted:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.fetchDepartamentsSuccessed:
      console.log(action);
      return {
        ...state,
        departaments: action.departaments,
        loading: false,
      };
    case actionTypes.fetchDepartamentsFailed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
