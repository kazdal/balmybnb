import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import SpotIndex from './spot_index';

const msp = state => {
  return {
    spots: state.entities.spots
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(msp, mdp)(SpotIndex);
