import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from "../actions/spot_actions";
import { merge } from "lodash";

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      return merge({}, state, {
        [action.payload.spot.id]: action.payload.spot
      });
    default:
      return state;
  }
};

export default spotsReducer;
