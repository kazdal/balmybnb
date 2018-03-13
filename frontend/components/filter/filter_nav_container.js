import { connect } from 'react-redux';
import React from 'react';

import { openModal } from '../../actions/modal_actions';
import FilterNav from './filter_nav';

const msp = state => ({
  
});

const mdp = dispatch => ({
  openModal: () => dispatch(openModal())
});

export default connect(msp, mdp)(FilterNav);
