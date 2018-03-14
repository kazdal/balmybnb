import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING} from '../actions/booking_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';
import { merge } from 'lodash';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.booking.booking.id]: action.booking.booking});
    case RECEIVE_CURRENT_USER:
      const bookings = action.payload ? action.payload.bookings : null;
      return merge({}, state, bookings);
    case RECEIVE_SPOT:
      const booking = action.payload.bookings;
      return merge({}, state, booking);
    default:
      return state;
  }
};

export default bookingsReducer;
