import { connect } from 'react-redux';

import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const msp = state => {
  debugger
  return {

  };
};
const mdp = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(msp, mdp)(BookingForm);
