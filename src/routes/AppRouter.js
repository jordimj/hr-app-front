import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../components/Home/Home';
import { Departments } from '../components/Departments/Departments';
import { Navbar } from '../components/UI/Navbar/Navbar';
import { Employees } from '../components/Employees/Employees';
import { HigherSalaries } from '../components/Reports/HigherSalaries/HigherSalaries';
import { SalaryStats } from '../components/Reports/SalaryStats/SalaryStats';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/reports/salaryStats" component={SalaryStats} />
        <Route path="/reports/salariesHigherThan" component={HigherSalaries} />
        <Route path="/employees" component={Employees} />
        <Route path="/departments" component={Departments} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
