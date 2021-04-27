import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/plugins/nucleo/css/nucleo.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/argon-dashboard-react.min.css';

import AuthLayout from './layouts/Auth';
import DashboardLayout from './layouts/Dashboard';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/dashboard" component={DashboardLayout} />
        <Redirect from="/" to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
