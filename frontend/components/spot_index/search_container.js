import { connect } from 'react-redux';
import React from 'react';

import Search from './search';
import { fetchSpots } from '../../actions/spot_actions';
import { fetchSpotImages } from '../../actions/spot_image_actions';
import { updateBounds } from '../../actions/filter_actions';

const msp = state => {
  return {
    spots: Object.assign([], state.entities.spots),
    spot_images: Object.assign([], state.entities.spot_images)
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpotImages: () => dispatch(fetchSpotImages()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
  };
};

export default connect(msp, mdp)(Search);
