import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './components/pages/App';
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import Wishlist from './components/pages/Wishlist';

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
      <AppRoute exact path='/order' component={Order} />
      <AppRoute exact path='/wishlist' component={Wishlist} />
    </div>
  </ConnectedRouter>;
