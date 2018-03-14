import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const fetchCurrentUser = () => dispatch => (
  APIUtil.fetchCurrentUser().then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ))
);

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
