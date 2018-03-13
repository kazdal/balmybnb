import * as APIUtil from "../util/bench_api_util";
import {fetchSpots} from './spot_actions.js';


export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = bounds => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export function updateBound(bound) {
  return (dispatch, getState) => {
    dispatch(updateBounds(bound));
    return fetchSpots(getState().filters)(dispatch);
  };
}
