import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import { ROUTES } from './store/routes';
import configureStore from './store/';
import App from './containers/app/app';
import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path="/" component={App}>
        {ROUTES.map(route =>
          <Route key={route.name} path={route.url} component={route.component} />
        )}
      </Route>

    </Router>
  </Provider>,
  document.getElementById('root')
);
