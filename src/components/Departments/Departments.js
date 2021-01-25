import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/actions';
import {
  StyledContainer,
  ListElement,
  Title,
  ListContainer,
} from '../../styles/core';
import { Spinner } from '../UI/Spinner/Spinner';

export const Departments = () => {
  const departments = useSelector((state) => state.departments);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (departments.length === 0) {
      dispatch(actions.fetchDepartments());
    }
  }, []);

  return (
    <StyledContainer>
      <Title>The company's departments</Title>
      {loading ? (
        <Spinner />
      ) : (
        <ListContainer>
          {departments.map((department) => (
            <ListElement key={department.name}>{department.name}</ListElement>
          ))}
        </ListContainer>
      )}
    </StyledContainer>
  );
};
