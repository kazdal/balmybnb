import { connect } from 'react-redux';
import React from 'react';

import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchSpotImages } from '../../actions/spot_image_actions';

const msp = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.match.params.spotId],
    spotImages: state.entities.spot_images,
    reviews: Object.values(state.entities.reviews),
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id))
  };
};

export default connect(msp, mdp)(SpotShow);
