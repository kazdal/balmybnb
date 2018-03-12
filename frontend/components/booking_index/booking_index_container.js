import { connect } from 'react-redux';

import { fetchBookings } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const msp = state => {
  return {
    currentUserId: state.session.currentUser ? state.session.currentUser.id : [],
    bookings: Object.values(state.entities.bookings)
  };
};

const mdp = dispatch => ({
  fetchBookings: bookings => dispatch(fetchBookings(bookings))
});

export default connect(msp, mdp)(BookingIndex);
