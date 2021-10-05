import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ children, ...routeprops }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeprops}> {children}</Route>;
};

export default PrivateRoute;
