import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';

import Home from './HomeComponent/Landing';
import SignIn from './Auth/signin';
import SignUp from './Auth/signup';
import Dashboard from './DashboardComponent/Dashboard';


const Root = () => {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </div>
  );
}

export default Root;
