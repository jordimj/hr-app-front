import React from 'react';
import { StyledContainer, Subtitle, Title } from '../../styles/core';

export const Home = () => {
  return (
    <StyledContainer>
      <Title>Welcome to the HR App!</Title>
      <Subtitle>
        Here you will find info about our departments, employees and salary
        reports
      </Subtitle>
    </StyledContainer>
  );
};
