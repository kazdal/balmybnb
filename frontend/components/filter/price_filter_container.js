import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

import { closeModal } from "../../actions/modal_actions";
import { updateFilter } from "../../actions/filter_actions";
import PriceFilter from "./price_filter";

const msp = state => ({
  minPrice: state.ui.filters.minPrice,
  maxPrice: state.ui.filters.maxPrice,
  spots: Object.values(state.entities.spots)
});

const mdp = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(PriceFilter);
