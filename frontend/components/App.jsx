import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavContainer from './nav/nav_container';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavContainer />
    <Modal />
  </div>
);

export default App;
