import React from 'react';
import { Route, Link, HashRouter, Switch } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavContainer from './nav/nav_container';
import Modal from './modal/modal';

import Home from './home/home';
import Footer from './footer/footer';
import SpotShowContainer from './spot_show/spot_show_container';
import BookingIndexContainer from './booking_index/booking_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import 'react-dates/initialize';

import SpotIndexContainer from './spot_index/spot_index_container';
import SearchContainer from './spot_index/search_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/spots" component={NavContainer} />
      <Route path="/" component={NavContainer} />
    </Switch>
    <Modal />

    <Route exact path="/" component={Home} />
    <Route exact path="/bookings" component={BookingIndexContainer} />
    <Route exact path="/spots" component={SearchContainer} />
    <Route exact path="/spots/:spotId" component={SpotShowContainer} />
    <Footer />
  </div>
);

export default App;
