import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';

function CustomRoute({ isPravete, ...rest }) {
  const { authenticated, loading } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (isPravete && !authenticated) {
    return <Redirect to='/login'/>
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPravete exact path="/users" component={Users} />
    </Switch>
  );
}