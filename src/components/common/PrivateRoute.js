// PrivateRoutes.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = auth.isLoggedIn(); // Check if user is logged in

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
