import { connect } from "react-redux";
import React from "react";

import Search from "./search";
import { fetchSpots } from "../../actions/spot_actions";
import { fetchSpotImages } from "../../actions/spot_image_actions";
import { fetchReviews } from "../../actions/review_actions";
import { updateFilter } from "../../actions/filter_actions";

const msp = state => {
  return {
    spots: Object.assign([], state.entities.spots),
    spotImages: Object.assign([], state.entities.spotImages),
    reviews: Object.values(state.entities.reviews)
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpotImages: () => dispatch(fetchSpotImages()),
    fetchReviews: () => dispatch(fetchReviews()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default connect(msp, mdp)(Search);
