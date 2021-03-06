import { connect } from "react-redux";

import { fetchSpots } from "../../actions/spot_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import { fetchSpotImages } from "../../actions/spot_image_actions";
import moment from "moment";

import BookingIndex from "./booking_index";

const msp = state => {
  return {
    currentUserId: state.session.currentUser
      ? state.session.currentUser.id
      : [],
    bookings: Object.values(state.entities.bookings),
    orderedBookings: Object.values(state.entities.bookings).sort((a, b) =>
     moment(a.start_date) - moment(b.start_date)
    ),
    spots: state.entities.spots,
    spotImages: state.entities.spotImages
  };
};

const mdp = dispatch => ({
  fetchSpots: spots => dispatch(fetchSpots(spots)),
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  fetchSpotImages: () => dispatch(fetchSpotImages())
});

export default connect(msp, mdp)(BookingIndex);
