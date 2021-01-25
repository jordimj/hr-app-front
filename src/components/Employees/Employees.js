import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/actions';
import { StyledContainer, Title } from '../../styles/core';
import { Table } from '../UI/Table';
import { CreateEmployee } from './CreateEmployee/CreateEmployee';
import { Spinner } from '../UI/Spinner/Spinner';

export const Employees = () => {
  const employees = useSelector((state) => state.employees);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(actions.fetchEmployees());
    }
  }, []);

  return (
    <StyledContainer>
      <Title>The company's employees</Title>
      {loading && <Spinner />}
      {employees.length > 0 && <Table data={employees} />}
      <CreateEmployee />
    </StyledContainer>
  );
};
