import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import SpotIndex from './spot_index';
import { fetchSpots } from '../../actions/spot_actions';
import { fetchSpotImages } from '../../actions/spot_image_actions';

const msp = state => {
  return {
    spots: Object.assign([], state.entities.spots),
    spot_images: Object.assign([], state.entities.spot_images)
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpotImages: () => dispatch(fetchSpotImages())
  };
};

export default connect(msp, mdp)(SpotIndex);
