import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../actions/actions';
import { StyledContainer, Title, Subtitle } from '../../../styles/core';
import { Table } from '../../UI/Table/Table';
import { Spinner } from '../../UI/Spinner/Spinner';

export const SalaryStats = () => {
  const salaryStatsReport = useSelector((state) => state.reports.salaryStats);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (salaryStatsReport.length === 0) {
      dispatch(actions.fetchFirstReport());
    }
  }, []);

  return (
    <StyledContainer>
      <Title>Report #1: Salary stats per department</Title>
      <Subtitle>
        Shows the maximum salary, the average salary and the total sum, per
        department.
      </Subtitle>
      {loading && <Spinner />}
      {salaryStatsReport.length > 0 && <Table data={salaryStatsReport} />}
    </StyledContainer>
  );
};
