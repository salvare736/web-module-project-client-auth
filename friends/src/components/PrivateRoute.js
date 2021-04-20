import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.getItem('token')) {
          console.log('access granted');
          return <Component />; // the component passed in through props
        } else {
          console.log('access denied');
          return <Redirect to='/login' />;
        }
      }}
    />
  );
}

export default PrivateRoute;
