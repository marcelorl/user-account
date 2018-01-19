import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './components/pages/App';
import Home from './components/pages/Home';

const history = createHistory();

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <App>
      <Component {...props} />
    </App>
  )} />
);

export const makeMainRoutes = () =>
  <ConnectedRouter history={history}>
    <div>
      <AppRoute exact path='/' component={Home} />
    </div>
  </ConnectedRouter>;
