import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/_UI/Layout';
import HomePage from 'containers/Home';
import LoginPage from 'containers/Login';
import NotFoundPage from 'containers/NotFound';
import PublicRoute from './PublicRouter';
import UserList from 'containers/User/List';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Layout>
          <Switch>
            <PublicRoute path="/home" component={HomePage} exact={true} />
            <PublicRoute path="/users" component={UserList} exact={true} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
