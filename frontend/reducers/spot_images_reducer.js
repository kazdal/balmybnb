import { merge } from "lodash";

import {
  RECEIVE_ALL_SPOT_IMAGES,
  RECEIVE_SPOT_IMAGE
} from "../actions/spot_image_actions";

import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from "../actions/spot_actions";

const spotImagesReducer = (state = {}, action) => {
  Object.freeze(state);

  let spot_images;

  switch (action.type) {
    // case RECEIVE_ALL_SPOTS:
    //   spot_images = [];
    //   let spots_array = Object.assign([], action.spots);
    //   spots_array.forEach((spot) => {
    //     spot.spotImageIds.forEach((spot_image) => {
    //       spot_images.push(spot_image);
    //     });
    //   });
    //   return merge({}, state, spot_images);
    case RECEIVE_SPOT:
      return merge({}, state, action.payload.spot_images);
    case RECEIVE_ALL_SPOT_IMAGES:
      return action.spot_images;
    default:
      return state;
  }
};

export default spotImagesReducer;
