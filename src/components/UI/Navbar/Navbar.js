import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarList, NavbarElement } from '../../../styles/core';

export const Navbar = () => {
  return (
    <>
      <NavbarList>
        <NavbarElement>
          <Link to="/">Home</Link>
        </NavbarElement>
        <NavbarElement>
          <Link to="/departments">Departments</Link>
        </NavbarElement>
        <NavbarElement>
          <Link to="/employees">Employees</Link>
        </NavbarElement>
        <NavbarElement>
          <Link to="/reports/salaryStats">Report #1</Link>
        </NavbarElement>
        <NavbarElement>
          <Link to="/reports/salariesHigherThan">Report #2</Link>
        </NavbarElement>
      </NavbarList>
    </>
  );
};
