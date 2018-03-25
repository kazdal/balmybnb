import * as APIUtil from "../util/spot_image_api_util";

export const RECEIVE_ALL_SPOT_IMAGES = "RECEIVE_ALL_SPOT_IMAGES";

export const RECEIVE_SPOT_IMAGE = "RECEIVE_SPOT_IMAGE";

export const receiveAllSpotImages = spot_images => ({
  type: RECEIVE_ALL_SPOT_IMAGES,
  spot_images
});

export const receiveSpotImage = spot_image => ({
  type: RECEIVE_SPOT_IMAGE,
  spot_image
});

export const fetchSpotImages = () => dispatch =>
  APIUtil.fetchSpotImages().then(spot_images =>
    dispatch(receiveAllSpotImages(spot_images))
  );

export const fetchSpotImage = id => dispatch =>
  APIUtil.fetchSpotImage(id).then(payload =>
    dispatch(receiveSpotImage(payload))
  );

export const createSpot = spot_image => dispatch =>
  APIUtil.createSpotImage(spot_image).then(spot_image =>
    dispatch(receiveSpotImage(spot_image))
  );
