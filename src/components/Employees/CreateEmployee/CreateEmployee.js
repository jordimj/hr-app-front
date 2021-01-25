import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../../actions/actions';
import { useForm } from '../../../hooks/useForm';
import {
  Subtitle,
  StyledButton,
  StyledFlex,
  StyledInput,
  StyledSelect,
} from '../../../styles/core';

export const CreateEmployee = () => {
  const dispatch = useDispatch();

  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      name: '',
      surname: '',
      salary: '',
      department: 0,
    },
    (formData) => dispatch(actionTypes.createEmployee(formData))
  );

  const { name, surname, salary, department } = formData;
  const departments = useSelector((state) => state.departments);

  return (
    <>
      <Subtitle>Need to add a new employee to the database?</Subtitle>
      <form onSubmit={handleSubmit}>
        <StyledFlex>
          <StyledInput
            type="text"
            name="name"
            placeholder="Employee's name"
            value={name}
            onChange={handleInputChange}
          />
          <StyledInput
            type="text"
            name="surname"
            placeholder="Employee's surname"
            value={surname}
            onChange={handleInputChange}
          />
          <StyledInput
            type="text"
            name="salary"
            placeholder="Employee's salary"
            value={salary}
            onChange={handleInputChange}
          />
          <StyledSelect
            name="department"
            placeholder="Employee's name"
            value={department}
            onChange={handleInputChange}
          >
            {departments.map((department) => (
              <option value={department.id}>{department.name}</option>
            ))}
          </StyledSelect>
          <StyledButton type="submit">Submit!</StyledButton>
        </StyledFlex>
      </form>
    </>
  );
};
