import { connect } from 'react-redux';
import React from 'react';

import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchSpotImages } from '../../actions/spot_image_actions';

const msp = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.match.params.spotId]
  };
};

const mdp = dispatch => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    fetchSpotImages: () => dispatch(fetchSpotImages())
  };
};

export default connect(msp, mdp)(SpotShow);
