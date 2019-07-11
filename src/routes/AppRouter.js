import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/_UI/Layout';
import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage';
import PublicRoute from './PublicRouter';
import UserPage from 'containers/UserPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Layout>
          <Switch>
            <PublicRoute path="/home" component={HomePage} exact={true} />
            <PublicRoute path="/users" component={UserPage} exact={true} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
