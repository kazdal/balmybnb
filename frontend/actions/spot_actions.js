import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

export const receiveSpot = payload => ({
  type: RECEIVE_SPOT,
  payload
});

export const fetchSpots = (filters) => dispatch => (
  APIUtil.fetchSpots(filters).then(spots => (
    dispatch(receiveAllSpots(spots))
  ))
);

export const fetchSpot = id => dispatch => {
  debugger
  return APIUtil.fetchSpot(id).then(payload => {
    debugger
    return dispatch(receiveSpot(payload));
  });
};

export const createSpot = spot => dispatch => (
  APIUtil.createSpot(spot).then(spot => (
    dispatch(receiveSpot(spot))
  ))
);
