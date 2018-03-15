import { connect } from 'react-redux';
import React from 'react';

import Search from './search';
import { fetchSpots } from '../../actions/spot_actions';
import { fetchSpotImages } from '../../actions/spot_image_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = state => {
  debugger
  return {
    spots: Object.assign([], state.entities.spots),
    spotImages: Object.assign([], state.entities.spot_images)
  };
};

const mdp = dispatch => {
  debugger
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpotImages: () => dispatch(fetchSpotImages()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(msp, mdp)(Search);
