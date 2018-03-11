import React from 'react';
import { Route, Link, HashRouter, Switch } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavContainer from './nav/nav_container';
import Modal from './modal/modal';

import Home from './home/home';
import Footer from './footer/footer';
import SpotIndexContainer from './spot_index/spot_index_container';
import SpotShowContainer from './spot_show/spot_show_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import 'react-dates/initialize';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/spots" component={NavContainer} />
      <Route path="/" component={NavContainer} />
    </Switch>
    <Modal />

    <Route exact path="/" component={Home} />
    <Route exact path="/spots" component={SpotIndexContainer} />
    <Route exact path="/spots/:spotId" component={SpotShowContainer} />
    <Footer />
  </div>
);

export default App;
