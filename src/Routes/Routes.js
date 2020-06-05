import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import Signin from '../Pages/Signin';
import Dashboard from '../Pages/Dashboard';
import UserInfo from '../Pages/UserInfo';
import TablePage from '../Pages/TablePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/login' exact component={Signin} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/UserInfo' component={UserInfo} />
        <PrivateRoute exact path='/TablePage' component={TablePage} />
      </Switch>
    );
  }
}

export default Routes;
