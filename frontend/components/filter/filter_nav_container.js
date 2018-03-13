import { connect } from 'react-redux';
import React from 'react';

import { openModal} from '../../actions/modal_actions';
import FilterNav from './filter_nav';

const msp = state => ({
  
});

const mdp = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(FilterNav);
