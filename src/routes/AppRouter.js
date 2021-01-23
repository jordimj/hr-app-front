import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../components/Home/Home';
import { Departaments } from '../components/Departaments/Departaments';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/country/:countryCode" component={Country} /> */}
        <Route path="/departaments" component={Departaments} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
