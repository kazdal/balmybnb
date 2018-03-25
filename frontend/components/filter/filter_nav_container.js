import { connect } from "react-redux";
import React from "react";

import { openModal } from "../../actions/modal_actions";
import { resetFilter } from "../../actions/filter_actions";

import FilterNav from "./filter_nav";

const msp = state => ({});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  resetFilter: (filter, value) => dispatch(resetFilter(filter, value))
});

export default connect(msp, mdp)(FilterNav);
