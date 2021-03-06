import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../actions/actions';
import { salarySelectOptions } from '../../../constants';
import {
  ListContainer,
  StyledContainer,
  ListElement,
  StyledFlex,
  Title,
  Subtitle,
  StyledSelect,
} from '../../../styles/core';
import { euroFormatter } from '../../../utils/helpers';
import { Spinner } from '../../UI/Spinner/Spinner';

export const HigherSalaries = () => {
  const loading = useSelector((state) => state.loading);
  const higherSalariesReport = useSelector(
    (state) => state.reports.higherSalaries
  );

  const dispatch = useDispatch();
  const [salary, setSalary] = useState('50000');

  useEffect(() => {
    dispatch(actions.fetchSecondReport(salary));
  }, [salary]);

  const salarySelectedHandler = (event) => {
    setSalary(event.target.value);
  };

  return (
    <StyledContainer>
      <Title>Report #2: Salaries higher than {euroFormatter(salary)}</Title>
      <Subtitle>
        Shows the departments that have 2 or more employees with salaries over
        the selected quantity below
      </Subtitle>
      <StyledFlex>
        <StyledSelect value={salary} onChange={salarySelectedHandler}>
          {salarySelectOptions.map((option) => (
            <option value={option}>{euroFormatter(option)}</option>
          ))}
        </StyledSelect>
        {loading ? (
          <Spinner />
        ) : higherSalariesReport.length === 0 ? (
          <p>
            There are no departments with two salaries over{' '}
            {euroFormatter(salary)}
          </p>
        ) : (
          <ListContainer>
            {higherSalariesReport.map((department) => (
              <ListElement key={department}>{department}</ListElement>
            ))}
          </ListContainer>
        )}
      </StyledFlex>
    </StyledContainer>
  );
};
