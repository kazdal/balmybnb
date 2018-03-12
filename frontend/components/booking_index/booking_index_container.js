import { connect } from 'react-redux';

import { fetchBookings } from '../../actions/booking_actions';
import { fetchSpots } from '../../actions/spot_actions';
import BookingIndex from './booking_index';

const msp = state => {
  return {
    currentUserId: state.session.currentUser ? state.session.currentUser.id : [],
    bookings: Object.values(state.entities.bookings),
    spots: state.entities.spots
  };
};

const mdp = dispatch => ({
  fetchSpots: spots => dispatch(fetchSpots(spots))
});

export default connect(msp, mdp)(BookingIndex);
