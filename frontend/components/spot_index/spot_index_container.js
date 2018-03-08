import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import SpotIndex from './spot_index';
import { fetchSpots } from '../../actions/spot_actions';

const msp = state => {
  return {
    spots: Object.assign([], state.entities.spots)
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(msp, mdp)(SpotIndex);
