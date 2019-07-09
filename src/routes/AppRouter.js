import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/_UI/Layout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import PublicRoute from './PublicRouter';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Layout>
        <Switch>
          <PublicRoute path="/home" component={HomePage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
