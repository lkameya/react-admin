import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: true
});

export default connect(mapStateToProps)(PublicRoute);
