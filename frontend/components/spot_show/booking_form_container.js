import { connect } from 'react-redux';
import { createBooking,
  clearBookingErrors } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';


const msp = state => {
  return {
    errors: state.errors.bookings,
    currentUser: state.session.currentUser ? state.session.currentUser : null,
    bookings: Object.values(state.entities.bookings)
  };
};
const mdp = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
  openModal: (type) => dispatch(openModal(type))
});

export default connect(msp, mdp)(BookingForm);
