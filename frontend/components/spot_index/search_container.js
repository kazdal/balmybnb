import { connect } from "react-redux";
import React from "react";

import Search from "./search";
import { fetchSpots } from "../../actions/spot_actions";
import { fetchSpotImages } from "../../actions/spot_image_actions";
import { updateFilter } from "../../actions/filter_actions";
import { receiveCoordinates } from "../../actions/coordinate_actions";

const msp = state => {
  return {
    spots: Object.assign([], state.entities.spots),
    spotImages: Object.assign([], state.entities.spotImages),
    coordinates: state.ui.coordinates
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpotImages: () => dispatch(fetchSpotImages()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    receiveCoordinates: coordinates => dispatch(receiveCoordinates(coordinates))
  };
};

export default connect(msp, mdp)(Search);
